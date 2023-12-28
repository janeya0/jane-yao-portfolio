import Home from './pages/Home/Home'
import './index.scss';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import ProjectsPage2 from './pages/Projects/ProjectsPage2';

function App() {
  return (
    <Router>
      <div>
        <nav className='navBar grid grid-cols-2 p-7'>
          <div className='inline-block'>
            <Link to="/">jane yao</Link>
          </div>
          {/* </div> */}
          <div className='text-right'>
          <div className='menu-items'>
            <Link to="/">home</Link>
          </div>
          <div className='menu-items'>
            <Link to="/about">about</Link>
          </div>
          <div className='inline-block'>
            <Link to="/projects">projects</Link>
          </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/projects2" element={<ProjectsPage2/>} />
        </Routes>

      </div>
    </Router>

  );
}

export default App;
