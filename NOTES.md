# NOTES.md — Reverb Project

> Fisier de sincronizare intre Claude CLI (laptop) si botul Telegram.
> Actualizat de ambele instante dupa fiecare sesiune de lucru.
> **Citit OBLIGATORIU la inceputul oricarei sesiuni noi.**
> **Bot Telegram: la inceput de conversatie citeste intotdeauna NOTES.md cu read_file("NOTES.md")**

---

## STATUS CURENT — 2 august 2026

### Site: reverbproject.ro LIVE
Deploiat si functional. Design dark/premium inspirat din globalrecords.com.

### Bot Telegram: @aidm_vaf_bot FUNCTIONAL
Raspunde la mesaje, modifica codul, face commit pe GitHub.
Auto-deploy prin daemon pe Mac (la fiecare 5 minute).

---

## CE E PE SITE ACUM

### Sectiuni (in ordine)
1. **Hero** — Logo "REVERB" imens (200px font), tagline "Professional Live Band", sageata scroll
2. **Artists** — Grid 4 coloane, 8 artisti (placeholder negru, fara poze): Marian Calugaru, Daniel Bruma, Paul Buciuman, Cornel Borbei, Razvan Peicu, Silviu Pasca, Mihai Gherase, Ovidiu Puscasu
3. **About** — "Band profesionist de instrumentisti, colaborand cu artisti crestini din Romania." + paragraf descriptiv
4. **Services** — 3 servicii: 01 Live Performance, 02 Artist Features, 03 Studio Production
5. **Contact** — "Let's Work", telefoane (0736 820 138, 0724 046 665), email (vreaucuvoi@reverbproject.ro)
6. **Footer** — Logo REVERB, linkuri social (Instagram, Facebook, YouTube — FARA linkuri reale, href="#"), copyright "2025" (gresit)

### Componente
- `src/app/page.tsx` — pagina principala cu toate sectiunile
- `src/app/layout.tsx` — layout global, importa Navbar si WhatsAppButton
- `src/components/navbar.tsx` — navbar fix, transparent la inceput, blur la scroll, menu mobil full-screen
- `src/components/WhatsAppButton.tsx` — buton WhatsApp fix jos-dreapta, numarul 0736 820 138
- `src/components/Header.tsx` — NEUTILIZAT (poate fi sters, duplicat al navbar)
- `src/app/api/telegram/route.ts` — NEUTILIZAT (webhook mutat pe reverb-webhook.vercel.app)

### Design actual
- Font: Inter (Google Fonts), variabil
- Culori: negru complet, text zinc-600/700/800 pentru subtil
- Animatii: Framer Motion, fade+slide in, scroll-triggered cu viewport
- Stil: ultra-minimal ca globalrecords.com

---

## TODO — CE LIPSESTE

### Prioritate mare
- [ ] POZE artisti — toate placeholder negru, Alex sa trimita poze sau link-uri
- [ ] Linkuri social reale — Instagram, Facebook, YouTube in footer (acum href="#")
- [ ] Copyright an — scrie "2025", ar trebui "2026"
- [ ] Stergere Header.tsx (fisier neutilizat)

### Prioritate medie
- [ ] Sectiune Media / Video — clipuri YouTube sau galerie foto cu evenimente
- [ ] Sectiune Releases — albume sau single-uri lansate
- [ ] Meta og:image — imagine pentru preview social (WhatsApp, Facebook share)
- [ ] Analytics — Vercel Analytics sau Google Analytics

### Prioritate mica
- [ ] Gmail Send As pentru vreaucuvoi@reverbproject.ro (SMTP Resend, depriorizat)
- [ ] Animatie hover pe logo in navbar
- [ ] Pagini separate pentru fiecare artist (optional)

---

## INFRASTRUCTURA

### GitHub
- Repo: avutei/reverb-project (public)
- Branch: main
- Token: in Vercel env vars pe reverb-webhook

### Vercel
- Site principal: reverb-project -> reverbproject.ro
- Bot webhook: reverb-webhook -> reverb-webhook.vercel.app
- Team: reverb-project team

### Auto-deploy Pipeline
Bot face commit -> daemon pe Mac verifica la 5 min -> git pull -> vercel deploy --prod -> site live
ATENTIE: functioneaza doar cand MacBook-ul e pornit (chiar si in sleep cu incarcator)

### Stack tehnic
- Next.js 16.2.11 (App Router), React 19, TypeScript
- Tailwind CSS v4, Framer Motion v12, lucide-react
- .npmrc: legacy-peer-deps=true
- next.config.ts: typescript.ignoreBuildErrors = true

### Email
- vreaucuvoi@reverbproject.ro -> forwarding prin ImprovMX -> alexvutei@gmail.com (functioneaza)
- SMTP outbound (Send As din Gmail) -> neresolvat, depriorizat

---

## SESIUNI DE LUCRU

### 2 august 2026 — Claude CLI
- Autentificat Vercel CLI prin device flow
- Rezolvat: deploy functional pe reverbproject.ro
- Rezolvat: domeniu conectat la proiect Vercel
- Creat: daemon launchd auto-deploy la 5 minute
- Creat: acest fisier NOTES.md

---

## CUM SA FOLOSESTI ACEST FISIER

**De pe Telegram (bot):** La inceputul oricarei conversatii:
> read_file("NOTES.md") — citeste statusul curent

Dupa modificari importante:
> Actualizeaza NOTES.md cu ce s-a schimbat

**De pe Claude CLI:** Se citeste automat la sesiuni noi pe acest proiect.

**Regula:** Dupa orice sesiune importanta, adauga o linie in "Sesiuni de lucru" cu ce s-a facut.
