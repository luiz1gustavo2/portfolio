import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Introduction from './pages/Introduction';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Introduction />
      <main>
        <AboutMe />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
