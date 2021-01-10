import React, { Component } from 'react'
import DataService from '../../services/Data-services'

import './TemperatureDisplay.css'


export default class TemperatureDisplay extends Component {

    state = {
        temperatureData: [],
        secondHighestTemp: '',
        daysWithSecondHighTemp: []
    }

    dataService = new DataService()

    componentDidMount(){
        this.getDataTemperature()
    }

    getDataTemperature = () => {
        this.dataService.getDataEnvironment()
        .then(response => {
            this.convertDate(response)
        })
        .catch(err => console.log(err))
    }

    convertDate = (temperatureData) => {
        const temperatureDateConverted = temperatureData.map(data => {
            const convertedDate = new Date(data.time).toLocaleString().slice(0, 10)
            data.time = convertedDate
            return data
        })

        this.setState({
            temperatureData: temperatureDateConverted
        }, () => this.findSecondHighTemp(this.state.temperatureData))
    }

    findSecondHighTemp = (data) => {
        const tempSortedByHight = data.map(data => {
            let temperature
            if(data.data) {
                temperature = data.data.temperature
            }
            return temperature
        })
        .sort((a,b) => b - a)
        .reduce((unique, item) => {
            return unique.includes(item) ? unique : [...unique, item]
        }, [])

        const secondHighestTemp = tempSortedByHight[1]
      
        this.setState({
            secondHighestTemp: secondHighestTemp
        }, () => this.findDaysSecondHighTemp(this.state.secondHighestTemp))
    }

    findDaysSecondHighTemp = (secondHighestTemp) => {
        const temperatureData = this.state.temperatureData

        const daysSecondHighTemp = temperatureData.filter(data => {
            if(data.data && data.data.temperature) {
                return data.data.temperature === secondHighestTemp
            }
        })
        .reduce((unique, item) => {
            return unique.includes(item.time) ? unique : [...unique, item.time]
        }, [])
    
        this.setState({
            daysWithSecondHighTemp: daysSecondHighTemp
        })
    }     
  

    render() {
        const arrDaysSecondHighTemp = this.state.daysWithSecondHighTemp

        return (
            <div className='outer-container-temperature'>
                <h2>Days second highest temperature</h2>   
                <div className='temperature-info'>
                    <div>
                        <p>Second highest temperature: </p>
                        <h3>{this.state.secondHighestTemp} degree</h3>
                    </div>
                    <div>
                    {arrDaysSecondHighTemp.map(date => {
                        return (
                            <ul key={date}>
                                <li>{date}</li>                          
                            </ul>  
                            )
                    })}
                    </div> 
                </div>    
            </div>
        )
    }
}
