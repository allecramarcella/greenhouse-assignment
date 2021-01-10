import React, { Component } from 'react'
import DataService from '../../services/Data-services'

import './TemperatureDisplay.css'


export default class TemperatureDisplay extends Component {

    state = {
        temperatureData: []
    }

    dataService = new DataService()

    componentDidMount(){
        this.getDataTemperature()
    }

    getDataTemperature = () => {
        this.dataService.getDataTemperature()
        .then(response => {
            this.convertDate(response)
        })
        .catch(err => console.log(err))
    }

    convertDate = (temperatureData) => {
        const temperatureDataConverted = temperatureData.map(data => {
            const convertedDate = new Date(data.time).toLocaleString()
            data.time = convertedDate
            return data
        })

        this.setState({
            temperatureData: temperatureDataConverted
        }, () => this.findDaysSecondHighTemp(this.state.temperatureData))
    }

    findDaysSecondHighTemp= (data) => {
        console.log('data', data)

        
    }


    render() {
    
        return (
            <div>
                
            </div>
        )
    }
}
