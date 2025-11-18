import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient (navy/grey) */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800" />

      {/* Spline container */}
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 backdrop-blur px-3 py-1 text-xs text-slate-200 mb-4">
              New • AI voice agents for growth
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              AI Agents That Call Your Leads. Automatically.
            </h1>
            <p className="mt-5 text-lg text-slate-300 max-w-xl">
              Book more appointments without lifting a finger.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#quote" className="inline-flex items-center justify-center rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 shadow-lg shadow-blue-500/25 transition-colors">
                Get a Free Quote
              </a>
              <a href="#demo" className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold px-6 py-3 border border-white/10 transition-colors">
                Watch Demo
              </a>
            </div>
          </div>

          {/* 3D Animation */}
          <div className="relative h-[380px] sm:h-[460px] lg:h-[520px] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-slate-900">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            {/* Soft gradient overlay to blend with brand colors */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(59,130,246,0.25),transparent_60%)]" />
          </div>
        </div>
      </div>

      {/* Decorative gradient aura behind content */}
      <div className="pointer-events-none absolute -z-0 inset-x-0 top-0 h-[480px] bg-[radial-gradient(60%_50%_at_50%_0%,rgba(30,64,175,0.35),transparent_60%)]" />
    </section>
  )
}

export default Hero
