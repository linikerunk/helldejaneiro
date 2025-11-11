import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import About from '../components/About'
import Features from '../components/Features'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Features />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default Home
