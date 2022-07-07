import { useState } from 'react';
import AppBar from './components/shared/AppBar';
import Contact from './components/tabs/Contact';
import Home from './components/tabs/Home';
import Skills from './components/tabs/Skills';
import Projects from './components/tabs/Projects';
import CV from './components/tabs/CV';

function App() {
  const [tab, setTab] = useState('Home');

  const changeTabHandler = (changeTo) => {
    setTab(changeTo);
  };

  return (
    <div className="text-stone-800">
      <AppBar tab={tab} onTabChange={changeTabHandler} />
      <div>
        {tab === 'Home' ? (
          <Home />
        ) : tab === 'Skills' ? (
          <Skills />
        ) : tab === 'Projects' ? (
          <Projects />
        ) : tab === 'Contact' ? (
          <Contact />
        ) : tab === 'CV' ? (
          <CV />
        ) : (
          'Tab Not Found'
        )}
      </div>
    </div>
  );
}

export default App;
