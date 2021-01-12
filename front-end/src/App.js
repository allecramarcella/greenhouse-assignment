import React, { Component } from 'react'
import './App.css';

import Logo from '../src/assets/physee_rgb.png'
import TomatoDisplay from './components/tomatoesDisplay/TomatoDisplay';
import ProductionDisplay from './components/productionDisplay/ProductionDisplay';
import TemperatureDisplay from './components/temperatureData/TemperatureDisplay';
import SoilDisplayCopy from './components/soilData/SoilDisplay copy'

import DataService from './services/Data-services'


export default class App extends Component {

  state = {
    tomatoesData: [],
    productionData: [],
    soilData: [],
    environmentData: [],
  }

  dataService = new DataService()

  componentDidMount(){
    this.getData()
  }

  getData = () => {
    Promise.all([
      this.dataService.getDataSoil(),
      this.dataService.getDataEnvironment(),
      this.dataService.getDataProduction(),
      this.dataService.getDataTomatoes()

    ])
    .then(responseFromDB => {
      const tomatoesDataArr = responseFromDB.splice(3,4)
      this.setState({
        tomatoesData: tomatoesDataArr
      })

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

  convertDate = (dataFromDB) => {
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

  // avageragByDay = (data) => {
  //   const uniqueDays = data.reduce((unique, item) => {
  //       return unique.includes(item.time) ? unique : [...unique, item.time]
  //   }, [])

  //   const dataSetPerDay = uniqueDays.map(date => {
  //       return  data.filter(data => data.time === date)
  //   })

  //   const moistureDataPerDay = dataSetPerDay.map(element => {
  //       const test = element.map(test =>  {
  //           if(test.data) {
  //               return test.data.moisture
  //           }
  //       })
  //       return test
  //   })

  //   const test2 = moistureDataPerDay.map(x => {
  //       const filtered = x.filter(x => x !== undefined)
  //       const arrLenght = filtered.length
  //       return filtered.reduce((a, c) => a + c )/arrLenght
  //   })
    
        
  //   this.setState({
  //       moistData: test2,
  //       labels: uniqueDays
  //   }, () => this.setChart())
  // }



  render() {
    console.log(this.state)
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
            <TomatoDisplay />
          </section>
          <section>
            <SoilDisplayCopy />
          </section>
          <section>
            <TemperatureDisplay environmentData={this.state.environmentData}/>
          </section>
        </main>

        <footer className='footer'>
          <img src={Logo} alt='Logo Physee'/>
        </footer>
      </div>
    )
  }
}
