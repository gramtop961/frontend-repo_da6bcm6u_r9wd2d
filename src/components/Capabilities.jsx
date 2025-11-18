function Capabilities() {
  const capabilities = [
    'Auto-call every lead',
    'Qualify + handle objections',
    'Book straight into your calendar',
    'Send confirmations',
    'Follow up cold leads',
  ]

  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-white mb-10">
          What Our AI Agents Do
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((c) => (
            <div key={c} className="rounded-xl border border-white/10 bg-white/5 p-5 text-slate-200">
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Capabilities
