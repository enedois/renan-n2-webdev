import './App.css';
import'./assets/css/bootstrap.min.css';
import'./assets/css/lineicons.css';
import'./assets/css/glightbox.min.css';
import './assets/css/tiny-slider.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Blog from './components/Blog';
import{BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Navigation/>     
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/portfolio" element={<Portfolio/>}/>
          <Route exact path="/services" element={<Services/>}/>
          <Route exact path="/testimonials" element={<Testimonials/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/blog" element={<Blog/>}/>
          <Route exact path="/social" element={<Contact/>}/>
          </Routes>
        </Router>    
    </div>
  );
}

export default App;
