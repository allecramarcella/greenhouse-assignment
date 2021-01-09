import './App.css';

import Logo from '../src/assets/physee_rgb.png'
import Greenhouse from '../src/assets/Crops2.jpg'
import TomatoDisplay from './components/tomatoesDisplay/TomatoDisplay';

function App() {
  return (
    <div className="dashboard">
        <div className='nav'>
          <img src={Logo} alt='Logo Physee'/>
        </div>
      <header className='header-container'>
        <div className='header-picture'>
          <img src={Greenhouse} alt='Greenhouse'/>
        </div>
        <div className='header-info'>
          <TomatoDisplay />
        </div>
      </header>
      <footer className='footer'>
        <img src={Logo} alt='Logo Physee'/>
      </footer>
    </div>
  );
}

export default App;
