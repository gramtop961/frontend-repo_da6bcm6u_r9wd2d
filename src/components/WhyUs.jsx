function WhyUs() {
  const items = [
    'Built for real estate & service businesses',
    'Google Sheets → Retell → Calendar workflows',
    '24/7 AI calling + follow-ups',
    'More appointments, more revenue',
    'No tech knowledge needed — we handle everything',
  ]

  return (
    <section className="relative bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 via-slate-900/30 to-slate-900/60" />
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-white mb-8">
          Why Melbourne AI Solutions?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((txt) => (
            <div key={txt} className="rounded-xl border border-white/10 bg-white/5 p-5 text-slate-200">
              {txt}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
