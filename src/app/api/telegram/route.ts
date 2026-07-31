import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!
const ANTHROPIC_KEY = process.env.ANTHROPIC_API_KEY!
const GITHUB_TOKEN = process.env.GITHUB_TOKEN!
const REVERB_REPO = 'avutei/reverb-project'
const BAC_AI_REPO = 'avutei/bac-ai'

// In-memory conversation history per chat_id
const conversations = new Map<number, Anthropic.MessageParam[]>()

async function sendTelegram(chatId: number, text: string) {
  const chunks = text.match(/[\s\S]{1,4000}/g) || [text]
  for (const chunk of chunks) {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: chunk, parse_mode: 'Markdown' })
    })
  }
}

async function githubGet(repo: string, path: string) {
  const res = await fetch(`https://api.github.com/repos/${repo}/contents/${path}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
      Accept: 'application/vnd.github.v3+json',
    },
  })
  return res.json()
}

async function githubPut(path: string, content: string, message: string) {
  let sha: string | undefined
  try {
    const existing = await githubGet(REVERB_REPO, path)
    sha = existing.sha
  } catch {}

  const body: Record<string, string> = {
    message,
    content: Buffer.from(content).toString('base64'),
  }
  if (sha) body.sha = sha

  const res = await fetch(`https://api.github.com/repos/${REVERB_REPO}/contents/${path}`, {
    method: 'PUT',
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
      Accept: 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  return res.json()
}

const tools: Anthropic.Tool[] = [
  {
    name: 'read_file',
    description: 'Citește conținutul unui fișier din repo-ul reverb-project (site-ul live)',
    input_schema: {
      type: 'object',
      properties: {
        path: { type: 'string', description: 'Calea fișierului, ex: src/app/page.tsx' },
      },
      required: ['path'],
    },
  },
  {
    name: 'write_file',
    description: 'Scrie sau actualizează un fișier în reverb-project. Commit automat → Vercel deployează în ~30s.',
    input_schema: {
      type: 'object',
      properties: {
        path: { type: 'string', description: 'Calea fișierului, ex: src/app/page.tsx' },
        content: { type: 'string', description: 'Conținutul complet al fișierului' },
        commit_message: { type: 'string', description: 'Mesajul de commit în română' },
      },
      required: ['path', 'content', 'commit_message'],
    },
  },
  {
    name: 'list_files',
    description: 'Listează fișierele dintr-un director din reverb-project',
    input_schema: {
      type: 'object',
      properties: {
        path: { type: 'string', description: 'Directorul, ex: src/app sau src/components' },
      },
      required: ['path'],
    },
  },
  {
    name: 'read_bac_ai',
    description: 'Citește un fișier din repo-ul bac-ai ca referință pentru pattern-uri de cod (Next.js, shadcn, Drizzle etc)',
    input_schema: {
      type: 'object',
      properties: {
        path: { type: 'string', description: 'Calea din bac-ai, ex: src/components/ui/card.tsx' },
      },
      required: ['path'],
    },
  },
  {
    name: 'list_bac_ai',
    description: 'Listează fișierele dintr-un director din bac-ai pentru a găsi pattern-uri',
    input_schema: {
      type: 'object',
      properties: {
        path: { type: 'string', description: 'Directorul din bac-ai, ex: src/components/ui' },
      },
      required: ['path'],
    },
  },
]

async function executeTool(name: string, input: Record<string, string>): Promise<string> {
  try {
    if (name === 'read_file') {
      const data = await githubGet(REVERB_REPO, input.path)
      if (data.content) return Buffer.from(data.content, 'base64').toString('utf8')
      return data.message || JSON.stringify(data)
    }

    if (name === 'write_file') {
      const result = await githubPut(input.path, input.content, input.commit_message)
      if (result.commit) {
        return `✅ ${input.path} actualizat. Commit: ${result.commit.sha.substring(0, 7)}. Site live în ~30 secunde pe reverbproject.ro`
      }
      return result.message || JSON.stringify(result)
    }

    if (name === 'list_files') {
      const data = await githubGet(REVERB_REPO, input.path)
      if (Array.isArray(data)) {
        return data.map((f: { type: string; name: string }) => `${f.type === 'dir' ? '📁' : '📄'} ${f.name}`).join('\n')
      }
      return JSON.stringify(data)
    }

    if (name === 'read_bac_ai') {
      const data = await githubGet(BAC_AI_REPO, input.path)
      if (data.content) return Buffer.from(data.content, 'base64').toString('utf8')
      return data.message || JSON.stringify(data)
    }

    if (name === 'list_bac_ai') {
      const data = await githubGet(BAC_AI_REPO, input.path)
      if (Array.isArray(data)) {
        return data.map((f: { type: string; name: string }) => `${f.type === 'dir' ? '📁' : '📄'} ${f.name}`).join('\n')
      }
      return JSON.stringify(data)
    }

    return 'Tool necunoscut'
  } catch (err: unknown) {
    return `Eroare: ${err instanceof Error ? err.message : String(err)}`
  }
}

const SYSTEM_PROMPT = `Ești asistentul AI al lui Alex Vutei pentru proiectul Reverb Project.

## Cine ești
Rulezi ca bot Telegram (@aidm_vaf_bot) și ai acces direct la codul site-ului. Poți citi și modifica fișiere, iar Vercel deployează automat în ~30 secunde după fiecare commit.

## Proiectul
- **Site**: reverbproject.ro (live pe Vercel)
- **Ce e**: Band profesionist de instrumentiști care colaborează cu artiști creștini în România
- **Email**: vreaucuvoi@reverbproject.ro (forwarding via ImprovMX → alexvutei@gmail.com)
- **GitHub**: avutei/reverb-project

## Stack tehnic (din bac-ai ca referință)
- Next.js 14 (App Router), TypeScript, Tailwind CSS
- shadcn/ui (Radix UI components), Framer Motion (animații)
- Zustand (state management), react-hook-form + Zod
- PostgreSQL + Drizzle ORM (când e nevoie de DB)
- next-auth (autentificare)

## Design țintă
Similar cu globalrecords.com: dark, premium, minimal, record label aesthetic. Negru dominant, accente albe/aurii, tipografie mare și boldă.

## Cum lucrezi
1. Când ți se cere o modificare → citești fișierele relevante cu read_file
2. Faci modificarea cu write_file (commit automat)
3. Confirmi scurt ce ai făcut și că site-ul se actualizează

## Reguli
- Răspunzi în română
- Ești concis și direct — nu explica ce urmează să faci, fă direct
- Când scrii cod folosești pattern-urile din bac-ai (read_bac_ai pentru referință)
- Componentele shadcn/ui sunt preferabile față de HTML raw`

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const message = body.message
    if (!message?.text) return NextResponse.json({ ok: true })

    const chatId: number = message.chat.id
    const userText: string = message.text

    // Typing indicator
    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendChatAction`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, action: 'typing' }),
    })

    if (!conversations.has(chatId)) conversations.set(chatId, [])
    const history = conversations.get(chatId)!

    history.push({ role: 'user', content: userText })
    if (history.length > 20) history.splice(0, history.length - 20)

    const client = new Anthropic({ apiKey: ANTHROPIC_KEY })

    let messages: Anthropic.MessageParam[] = [...history]
    let response = await client.messages.create({
      model: 'claude-sonnet-4-5',
      max_tokens: 8096,
      system: SYSTEM_PROMPT,
      tools,
      messages,
    })

    // Agentic loop — runs tools until done
    while (response.stop_reason === 'tool_use') {
      const toolUseBlocks = response.content.filter((b): b is Anthropic.ToolUseBlock => b.type === 'tool_use')

      const toolResults: Anthropic.ToolResultBlockParam[] = await Promise.all(
        toolUseBlocks.map(async (block) => ({
          type: 'tool_result' as const,
          tool_use_id: block.id,
          content: await executeTool(block.name, block.input as Record<string, string>),
        }))
      )

      messages = [
        ...messages,
        { role: 'assistant', content: response.content },
        { role: 'user', content: toolResults },
      ]

      response = await client.messages.create({
        model: 'claude-sonnet-4-5',
        max_tokens: 8096,
        system: SYSTEM_PROMPT,
        tools,
        messages,
      })
    }

    const textBlock = response.content.find((b): b is Anthropic.TextBlock => b.type === 'text')
    const reply = textBlock?.text ?? 'Gata.'

    history.push({ role: 'assistant', content: reply })

    await sendTelegram(chatId, reply)
  } catch (err: unknown) {
    console.error('Telegram webhook error:', err)
  }

  return NextResponse.json({ ok: true })
}
