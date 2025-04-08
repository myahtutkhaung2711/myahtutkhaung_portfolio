import './App.css';
import Navbar from './component/navbar/navbar';
import Header from './component/header/header'; // Importing the Header component
import Footer from './component/footer/footer'; // Importing the Footer component
import About from './component/about/about';
import Skills from './component/skills/skills';
import Contact from './component/contact/contact';
import Projects from './component/project/project';

function App() {
  return (
      <div>
        <Navbar />
          <Header/>
          <About />
          <Skills />
          <Projects />
          <Contact />
        <Footer/>
      </div>
  );
}

export default App;
