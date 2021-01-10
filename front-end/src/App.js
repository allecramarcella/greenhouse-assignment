import './App.css';

import Logo from '../src/assets/physee_rgb.png'
import TomatoDisplay from './components/tomatoesDisplay/TomatoDisplay';
import ProductionDisplay from './components/productionDisplay/ProductionDisplay';
import TemperatureDisplay from './components/temperatureData/TemperatureDisplay';

function App() {
  return (
    <div className="dashboard">
        <div className='nav'>
          <img src={Logo} alt='Logo Physee'/>
        </div>
      <header className='header-container'>
        <div className='header-left'>
          <h1>Dashboard</h1>
        </div>
        <div className='header-right'>
          <ProductionDisplay/>
        </div>
      </header>
      <section className='tomato-section'>
        <TomatoDisplay />
      </section>
      <section className='temperature-section'>
        <TemperatureDisplay />
      </section>
      <footer className='footer'>
        <img src={Logo} alt='Logo Physee'/>
      </footer>
    </div>
  );
}

export default App;
