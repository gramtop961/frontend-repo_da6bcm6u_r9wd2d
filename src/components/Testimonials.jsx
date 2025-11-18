function Testimonials() {
  const quotes = [
    '“Bookings up 40%.”',
    '“AI called 100% of our leads.”',
    '“Appointment quality is better than manual callers.”',
  ]

  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-white mb-10">
          Testimonials
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <div key={q} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-200">
              {q}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
