import React, { Component } from 'react'
import Chart from 'chart.js'

export default class HumidityDisplay extends Component {
    state = {
        labels: [],
        humidityData: []
    }

    componentDidUpdate(prevProps){
        if(prevProps.environmentData !== this.props.environmentData){
            this.avageragByDay(this.props.environmentData)
        }
    }

    avageragByDay = (data) => {
        const uniqueDays = data.reduce((unique, item) => {
            return unique.includes(item.time) ? unique : [...unique, item.time]
        }, [])

        const dataSetPerDay = uniqueDays.map(date => {
            return  data.filter(data => data.time === date)
        })

        const humidityDataPerDay = dataSetPerDay.map(dataPerDay => {
            const humidityPerDay = dataPerDay.map(data =>  {
                if(data.data) {
                    return data.data['relative humidity']
                }
            })
            return humidityPerDay
        })

        const onlyValidHumidityData = humidityDataPerDay.map(x => {
            const filtered = x.filter(x => x !== undefined)
            const filtteredArrLenght = filtered.length
            return filtered.reduce((a, c) => a + c )/filtteredArrLenght
        })
        
        this.setState({
            humidityData: onlyValidHumidityData,
            labels: uniqueDays
        }, () => this.setChart())
    }

    setChart = () => {
        const ctx = document.getElementById("myChart4");
        new Chart(ctx, {
          type: "line",
          data: {
            labels: this.state.labels,
            datasets: [
              {
                label: 'Average relative humidity level per day',
                data: this.state.humidityData,
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
                <h2>Environment data - Relative humidity</h2>
                 <canvas id="myChart4" width="400" height="400" />    
            </div>
        )
    }
}
