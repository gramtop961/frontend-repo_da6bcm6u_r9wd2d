function HowItWorks() {
  const steps = [
    { n: 1, t: 'Connect your leads' },
    { n: 2, t: 'AI calls + books automatically' },
    { n: 3, t: 'You close deals while we run the backend' },
  ]

  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-white mb-10">
          How It Works
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold mb-4">
                {s.n}
              </div>
              <p className="text-slate-200">{s.t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
