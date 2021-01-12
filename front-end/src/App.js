import React, { Component } from 'react'
import './App.css';

import Logo from '../src/assets/physee_rgb.png'
import TomatoDisplay from './components/tomatoesDisplay/TomatoDisplay';
import ProductionDisplay from './components/productionDisplay/ProductionDisplay';
import TemperatureDisplay from './components/temperatureData/TemperatureDisplay';

import DataService from './services/Data-services'
import MoistureDisplay from './components/soilData/MoistureDisplay';
import PhDisplay from './components/soilData/PhDisplay';
import LightDisplay from './components/environmentDisplay/LightDisplay';
import HumidityDisplay from './components/environmentDisplay/HumidityDisplay';
import Temperature from './components/environmentDisplay/Temperature'



export default class App extends Component {

  state = {
    productionData: [],
    soilData: [],
    environmentData: []
  }

  dataService = new DataService()

  componentDidMount(){
    this.getData()
  }

  // get data from database
  getData = () => {
    Promise.all([
      this.dataService.getDataSoil(),
      this.dataService.getDataEnvironment(),
      this.dataService.getDataProduction()
    ])
    .then(responseFromDB => {
      const dataWithTimeCoverted = responseFromDB.map(data => {
        return this.convertDate(data)
      })
      return dataWithTimeCoverted
    })
    .then(dataWithTimeCovertedArr => {
      this.setState({
        soilData: dataWithTimeCovertedArr[0],
        environmentData: dataWithTimeCovertedArr[1],
        productionData: dataWithTimeCovertedArr[2]
      })
    })
    .catch(err => console.log(err))
  }

  // covert time in date
  convertDate = (dataFromDB ) => {
    const timeSetToDate = dataFromDB.map(data => {
      if(data.time){
        const timeConverted = new Date(data.time).toLocaleString().slice(0, -8)
        data.time = timeConverted
        return data
      } else {
        const timeConverted = new Date(data.harvestDate).toLocaleString().slice(0, -8)
        data.harvestDate = timeConverted
        return data
      }
    })
    return timeSetToDate
  }

  render() {

    if(this.state.productionData.length < 1 && this.state.soilData.lenght < 1 && this.state.environmentData.length < 1) {
      return <h1>loading</h1> 
    }

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
            <ProductionDisplay productionData={this.state.productionData}/>
          </div>
        </header>

        <main>
          <section>
            <TomatoDisplay/>
          </section>
          <section className='section-charts'>
            <MoistureDisplay soilData={this.state.soilData} />
            <PhDisplay soilData={this.state.soilData}/>
          </section>

          <section className='section-charts'>
            <LightDisplay environmentData={this.state.environmentData}/>
            <Temperature environmentData={this.state.environmentData}/>
            <HumidityDisplay environmentData={this.state.environmentData}/>
          </section>


          <section>
            <TemperatureDisplay environmentData={this.state.environmentData} />
          </section>
        </main>

        <footer className='footer'>
          <img src={Logo} alt='Logo Physee'/>
        </footer>
      </div>
    )
  }
}
