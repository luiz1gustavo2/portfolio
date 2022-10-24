import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Introduction from './pages/Introduction';
import Footer from './components/Footer';
import MyProjects from './pages/MyProjects';

function App() {

  return (
    <>
      <Introduction />
      <main>
        <AboutMe />
        <MyProjects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
