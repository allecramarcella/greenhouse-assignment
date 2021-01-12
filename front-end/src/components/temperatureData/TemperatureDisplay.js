import React, { Component } from 'react'

import './TemperatureDisplay.css'


export default class TemperatureDisplay extends Component {

    state = {
        environmentData: [],
        secondHighestTemp: '',
        daysWithSecondHighTemp: []
    }

    componentDidMount(){
        this.setState({
            environmentData: this.props.environmentData
        }, () => this.findSecondHighTemp(this.state.environmentData))
    }

    findSecondHighTemp = (environmentData) => {
        const tempSortedByHight = environmentData.map(data => {
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
        }, () => this.findDaysSecondHighTemp(secondHighestTemp))
    }

    findDaysSecondHighTemp = (secondHighestTemp) => {
        const temperatureData = this.state.environmentData

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
