import Navbar  from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/menu' exact Component={Menu}/>
        <Route path='/about' exact Component={About}/>
        <Route path='/contact' exact Component={Contact}/>


      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
