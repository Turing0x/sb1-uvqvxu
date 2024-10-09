import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Categories from './components/Categories'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Categories />
      <Contact />
      <Footer />
    </div>
  )
}

export default App