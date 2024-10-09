import Hero from './components/Hero'
import Services from './components/Services'
import Categories from './components/Categories'
import Contact from './components/Contact'
import Footer from './components/Footer'

interface Props {
  language: 'en' | 'es';
}

const App: React.FC<Props> = ({ language }) => {
  return (
    <div className="min-h-screen bg-white">
      <Hero language={language}/>
      <Services language={language}/>
      <Categories language={language} />
      <Contact language={language}/>
      <Footer language={language}/>
    </div>
  )
}

export default App