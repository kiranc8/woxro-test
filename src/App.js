import './App.css';
import Banner from './components/Banner';
import Rawpost from './components/Rowpost';
import Contribution from './components/Contribution';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className='App'>
      <div className='close-button'>
        <span>x</span>
      </div>
      <Banner/>
      <Rawpost/>
      <Contribution/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
