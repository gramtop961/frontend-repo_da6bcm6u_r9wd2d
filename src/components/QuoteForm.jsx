import { useState } from 'react'

function QuoteForm() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    setStatus('Sending...')

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/quote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('Thanks! We will reach out shortly.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="quote" className="bg-slate-950">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-white mb-8">
          Get a Free Quote
        </h2>
        <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4 bg-white/5 border border-white/10 rounded-2xl p-6">
          <input name="name" placeholder="Name" required className="rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder-slate-400" />
          <input name="business_name" placeholder="Business Name" required className="rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder-slate-400" />
          <input name="phone" placeholder="Phone" required className="rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder-slate-400" />
          <input name="email" type="email" placeholder="Email" required className="rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder-slate-400" />
          <input name="lead_volume" placeholder="Lead Volume" className="rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder-slate-400 sm:col-span-2" />
          <button className="sm:col-span-2 inline-flex items-center justify-center rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 transition-colors">
            Get My Free Quote
          </button>
        </form>
        {status && (
          <p className="text-center mt-4 text-slate-200">{status}</p>
        )}
      </div>
    </section>
  )
}

export default QuoteForm
