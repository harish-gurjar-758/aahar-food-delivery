import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from './Components/Pages/NotFound';
import NavBar from './Components/Pages/NavBar';
import Footer from './Components/Pages/Footer';
import Home from './Components/Coustomer/Routes/Home/Home';

function App() {
  return (
    <div className="App">

      <Router>
        <NavBar />
        <Routes>
          {/* Registration Routes */}


          {/* Customer Site Routes */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}

          {/* Shopers Routes */}

          {/* Catch-all route for 404 pages */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
