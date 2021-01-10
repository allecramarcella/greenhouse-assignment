import './App.css';

import Logo from '../src/assets/physee_rgb.png'
import TomatoDisplay from './components/tomatoesDisplay/TomatoDisplay';
import ProductionDisplay from './components/productionDisplay/ProductionDisplay';
import TemperatureDisplay from './components/temperatureData/TemperatureDisplay';
import SoilDisplayCopy from './components/soilData/SoilDisplay copy'

function App() {
  return (
    <div className="dashboard">
        <nav className='nav'>
          <img src={Logo} alt='Logo Physee'/>
        </nav>

      <header className='header-container'>
        <div className='header-left'>
          <h1>Dashboard</h1>
        </div>
        <div className='header-right'>
          <ProductionDisplay/>
        </div>
      </header>

      <main>
        <section>
          <TomatoDisplay />
        </section>
        <section>
          <SoilDisplayCopy />
        </section>
        <section>
          <TemperatureDisplay />
        </section>
      </main>

      <footer className='footer'>
        <img src={Logo} alt='Logo Physee'/>
      </footer>
    </div>
  );
}

export default App;
