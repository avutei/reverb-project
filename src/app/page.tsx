export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center space-y-8">

        <div className="space-y-2">
          <h1 className="text-5xl font-bold tracking-tight">Reverb Project</h1>
          <p className="text-zinc-400 text-lg">Band profesionist pentru evenimentul tău</p>
        </div>

        <div className="h-px bg-zinc-800 w-full" />

        <p className="text-zinc-300 text-base leading-relaxed">
          Orice artist. Orice scenă. Muzică live care transformă evenimentele în amintiri.
        </p>

        <div className="space-y-2">
          <p className="text-zinc-500 text-sm uppercase tracking-widest">Contact</p>
          <p className="text-white text-xl font-medium">0736 820 138 / 0724 046 665</p>
          <a
            href="mailto:vreaucuvoi@reverbproject.ro"
            className="text-zinc-400 hover:text-white transition-colors text-sm"
          >
            vreaucuvoi@reverbproject.ro
          </a>
        </div>

        <div className="h-px bg-zinc-800 w-full" />

        <p className="text-zinc-600 text-xs">© 2026 Reverb Project · reverbproject.ro</p>
      </div>
    </main>
  );
}
