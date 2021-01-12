import React, { Component } from 'react'
import Chart from 'chart.js'


export default class MoistureDisplay extends Component {

    state = {
        labels: [],
        moistData: []
    }

    componentDidUpdate(prevProps){
        if(prevProps.soilData !== this.props.soilData){
            this.avageragByDay(this.props.soilData)
        }
    }

    avageragByDay = (data) => {
        const uniqueDays = data.reduce((unique, item) => {
            return unique.includes(item.time) ? unique : [...unique, item.time]
        }, [])

        const dataSetPerDay = uniqueDays.map(date => {
            return  data.filter(data => data.time === date)
        })

        const moistureDataPerDay = dataSetPerDay.map(dataPerDay => {
            const moisturePerDay = dataPerDay.map(data =>  {
                if(data.data) {
                    return data.data.moisture
                }
            })
            return moisturePerDay
        })

        const onlyValidMoistureData = moistureDataPerDay.map(x => {
            const filtered = x.filter(x => x !== undefined)
            const filtteredArrLenght = filtered.length
            return filtered.reduce((a, c) => a + c )/filtteredArrLenght
        })
        
        this.setState({
            moistData: onlyValidMoistureData,
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
                <h2>Soil data - Moisture</h2>
                 <canvas id="myChart" width="400" height="400" />    
            </div>
        )
    }
}
