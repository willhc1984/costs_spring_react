import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Container from './components/layout/Container';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Projects from './components/pages/Projects';

function App() {
  return (
    <Router>
     <NavBar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} > </Route>
        </Routes>
        <Routes>
          <Route path="/projects" element={<Projects />} > </Route>
        </Routes>
        <Routes>
          <Route path="/company" element={<Company />} > </Route>
        </Routes>
        <Routes>
          <Route path="/contact" element={<Contact />} > </Route>
        </Routes>
        <Routes>
          <Route path="/newproject" element={<NewProject />} > </Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
