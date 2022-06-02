import Footer from './PortFolio/Footer';
import Achievement from './PortFolio/Achievement';
import Contact from './PortFolio/Contact';
import Header from './PortFolio/Header';
import Page1 from './PortFolio/Page1';
import Page2 from './PortFolio/Page2';
import Progress from './PortFolio/Progress';
import "./App.css"
// import { Router } from 'react-router';

function App() {
  return (
    <div className="App">
      {/* <Router */}
      <Header/>

      <div className="options">
        <Page1/>
        <Page2 id="About"/>
        <Progress id="Progress"/>
        <Achievement id="Achievement"/>
        <Contact id="Contact"/>
        <Footer/>
      </div>
      
    </div>
  );
}

export default App;
