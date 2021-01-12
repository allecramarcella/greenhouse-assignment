import React, { Component } from 'react'
import Chart from 'chart.js'
import DataService from '../../services/Data-services'

import './SoilDisplay.css'


export default class SoilDisplayCopy extends Component {

    state = {
        labels: [],
        moistData: []
    }

    dataService = new DataService()

    componentDidMount(){
        this.getDataSoil()
    }

    getDataSoil = () => {
        this.dataService.getDataSoil()
        .then(response => {
            this.convertDate(response)
            this.setDatasets(response)
        })
        .catch(err => console.log(err))
    }

    convertDate = (soilData) => {
        const soilDateConverted = soilData.map(data => {
            const convertedDate = new Date(data.time).toLocaleString().slice(0, 10)
            data.time = convertedDate
            return data
        })
        this.avageragByDay(soilDateConverted)
    }

    avageragByDay = (data) => {
        const uniqueDays = data.reduce((unique, item) => {
            return unique.includes(item.time) ? unique : [...unique, item.time]
        }, [])

        const dataSetPerDay = uniqueDays.map(date => {
            return  data.filter(data => data.time === date)
        })

        const moistureDataPerDay = dataSetPerDay.map(element => {
            const test = element.map(test =>  {
                if(test.data) {
                    return test.data.moisture
                }
            })
            return test
        })

        const test2 = moistureDataPerDay.map(x => {
            const filtered = x.filter(x => x !== undefined)
            const arrLenght = filtered.length
            return filtered.reduce((a, c) => a + c )/arrLenght
        })
        
            
        this.setState({
            moistData: test2,
            labels: uniqueDays
        }, () => this.setChart())
    }

    setChart = () => {
        const ctx = document.getElementById("myChart");
        new Chart(ctx, {
          type: "line",
          data: {
            labels: this.state.labels,
            datasets: [
              {
                label: 'Average moisture level per day',
                data: this.state.moistData,
                backgroundColor: '#F5F5F5',
                borderColor: 'black',
                borderWidth: 1
              }
            ]
          }
        });
    }

    render() {

        return (
            <div className='outer-container'>
                <h2>Soil data</h2>
                <h3>Moisture</h3>
                 <canvas id="myChart" width="400" height="400" />    
            </div>
        )
    }
}
