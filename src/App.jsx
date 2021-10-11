import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Contact from './components/Contact';
import Coursework from './components/Coursework';
import About from './components/About';
import Skills from './components/Skills';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import Experiences from './components/Experiences';
import Projects from "./components/Projects";
import {useState} from 'react';
import CancelIcon from '@material-ui/icons/Cancel';


function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <Navigation openStatus={open} closeFunc={()=>setOpen(false)}/>
      <div className='content'>
        <div className="hamburg">
          {open?<CancelIcon fontSize="large" onClick={()=>setOpen(false)}/>:<MenuRoundedIcon fontSize="large" onClick={()=>setOpen(!open)}/>}
        </div>
        <Home/>
        <About/>
        <Coursework/>
        <Skills/>
        <Experiences/>
        <Projects/>
        <Contact/>
      </div>

    </div>
  );
}

export default App;
