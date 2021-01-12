import React, { Component } from 'react'
import Chart from 'chart.js'

export default class LightDisplay extends Component {
    state = {
        labels: [],
        lightData: []
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

        const lightDataPerDay = dataSetPerDay.map(dataPerDay => {
            const lightPerDay = dataPerDay.map(data =>  {
                if(data.data) {
                    return data.data['light intensity']
                }
            })
            return lightPerDay
        })

        const onlyValidLightData = lightDataPerDay.map(x => {
            const filtered = x.filter(x => x !== undefined)
            const filtteredArrLenght = filtered.length
            return filtered.reduce((a, c) => a + c )/filtteredArrLenght
        })
        
        this.setState({
            lightData: onlyValidLightData,
            labels: uniqueDays
        }, () => this.setChart())
    }

    setChart = () => {
        const ctx = document.getElementById("myChart3");
        new Chart(ctx, {
          type: "line",
          data: {
            labels: this.state.labels,
            datasets: [
              {
                label: 'Average light intensity level per day',
                data: this.state.lightData,
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
                <h2>Environment data - Light intensity</h2>
                 <canvas id="myChart3" width="400" height="400" />    
            </div>
        )
    }
}
