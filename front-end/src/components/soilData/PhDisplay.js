import React, { Component } from 'react'
import Chart from 'chart.js'

import './PhDisplay.css'

export default class PhDisplay extends Component {
    state = {
        labels: [],
        phData: [],
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

        const phDataPerDay = dataSetPerDay.map(dataPerDay => {
            const phPerDay = dataPerDay.map(data =>  {
                if(data.data) {
                    return data.data.pH
                }
            })
            return phPerDay
        })
  
        const onlyValidPhData = phDataPerDay.map(x => {
            const filtered = x.filter(x => x !== undefined)
            const filtteredArrLenght = filtered.length
            return filtered.reduce((a, c) => a + c )/filtteredArrLenght
        })

        console.log(onlyValidPhData)
        console.log(uniqueDays)
        
        this.setState({
            phData: onlyValidPhData,
            labels: uniqueDays
        }, this.setChart)
    }

    setChart = () => {
        console.log(this.state.labels)
        const ctx = document.getElementById("myChart2");
        new Chart(ctx, {
          type: "line",
          data: {
            labels: this.state.labels,
            datasets: [
              {
                label: 'Average ph level per day',
                data: this.state.phData,
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
                <h2>Soil data - Ph</h2>
                 <canvas id="myChart2" width="400" height="400" />    
            </div>
        )
    }
    
}
