import GlobalStyles from './styles/globalStyles';
import Slider from './components/Slider';
import Navbar from './components/Navbar';
import { useState } from 'react';
import TextComponents from './components/TextComponents';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [expanded, setExpanded] = useState();

  return (
    <>
      <GlobalStyles />
      <Navbar expanded={expanded} setExpanded={setExpanded} />
      <main onClick={() => setExpanded(false)}>
        <div id="home">
          <h1 style={{ paddingTop: '120px', textAlign: 'center', fontWeight: 'bold', fontSize: '3em' }}>Welcome to Safedash!</h1>
          <hr style={{ width: '40%', margin: '0 auto', height: '6px' }} />
          <p style={{ width: '70%', margin: '20px auto', textAlign: 'center', fontSize: '1.2em' }}>
            At Safedash, we are committed to fortifying your digital landscape against a myriad of cyber threats. Our two flagship products, <b>CastDDoS</b> and <b>CASTLOAD</b>, are tailored to ensure
            that your business remains resilient, adaptable, and ever-evolving in the face of growing digital challenges.
          </p>
        </div>
        <Slider />
        <TextComponents />
        <About />
        <Contact />
      </main>
    </>
  );
}

export default App;
