import './App.css'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HighLights from './components/HighLights'
import HowItWorks from './components/HowItWorks'
import Model from './components/Model'
import Navbar from './components/Navbar'

function App() {

  return (
    <main className='bg-black'>
      <Navbar />
      <Hero />
      <HighLights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  )
}

export default App
