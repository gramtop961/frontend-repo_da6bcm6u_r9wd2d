import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import Capabilities from './components/Capabilities'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import QuoteForm from './components/QuoteForm'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* Hero with Spline animation */}
      <Hero />

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6"><div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" /></div>

      {/* Why Us */}
      <WhyUs />

      <div className="mx-auto max-w-6xl px-6"><div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" /></div>

      {/* Capabilities */}
      <Capabilities />

      <div className="mx-auto max-w-6xl px-6"><div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" /></div>

      {/* How It Works */}
      <HowItWorks />

      <div className="mx-auto max-w-6xl px-6"><div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" /></div>

      {/* Testimonials */}
      <Testimonials />

      <div className="mx-auto max-w-6xl px-6"><div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" /></div>

      {/* Quote Form */}
      <QuoteForm />

      <footer className="bg-slate-950/80 py-10 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Melbourne AI Solutions
      </footer>
    </div>
  )
}

export default App
