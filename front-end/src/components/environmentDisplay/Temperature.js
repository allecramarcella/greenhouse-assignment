import React, { Component } from 'react'
import Chart from 'chart.js'

export default class Temperature extends Component {
    state = {
        labels: [],
        tempData: []
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

        const tempDataPerDay = dataSetPerDay.map(dataPerDay => {
            const tempPerDay = dataPerDay.map(data =>  {
                if(data.data) {
                    return data.data['temperature']
                }
            })
            return tempPerDay
        })

        const onlyValidTempData = tempDataPerDay.map(x => {
            const filtered = x.filter(x => x !== undefined)
            const filtteredArrLenght = filtered.length
            return filtered.reduce((a, c) => a + c )/filtteredArrLenght
        })
        
        this.setState({
            tempData: onlyValidTempData,
            labels: uniqueDays
        }, () => this.setChart())
    }

    setChart = () => {
        const ctx = document.getElementById("myChart5");
        new Chart(ctx, {
          type: "line",
          data: {
            labels: this.state.labels,
            datasets: [
              {
                label: 'Average temperature level per day',
                data: this.state.tempData,
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
                <h2>Environment data - Temperature</h2>
                 <canvas id="myChart5" width="400" height="400" />    
            </div>
        )
    }
}
