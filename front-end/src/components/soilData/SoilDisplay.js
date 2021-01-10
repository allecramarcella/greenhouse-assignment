import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import DataService from '../../services/Data-services'

import './SoilDisplay.css'


export default class SoilDisplay extends Component {

    state = {
        labels: [],
        dataSets: []
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
            const convertedDate = new Date(data.time).toLocaleString()
            return convertedDate
        })
        this.setLabelChart(soilDateConverted)
    }

    setLabelChart = (dates) => {
        this.setState({
            labels: dates
        })
    }

    setDatasets = (soilData) => {
        const moistData = soilData.map(data => {
            if(data.data){
                if(data.data.moisture){
                    return data.data.moisture
                }
            }
        })


        this.setState({
            dataSets: [
                {
                    label: 'Moisture',
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: [1, 2, 4, 5, 6]
                }
            ]
        })
    }

    render() {
        console.log(this.state)

        return (
            <div>
                <Line
                data={this.state}
                options={{
                    maintainAspectRatio: true,
                        title: {
                        display: false,
                        text: 'Title',
                        fontSize: 25
                        },
                        legend: {
                        display: false,
                        position: 'bottom'
                        },
                        scales: {
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Date',
                            fontSize: 10
                        },
                        position: 'bottom',
                        gridLines: {
                            display: false
                        }
                    }],
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Moisture',
                            fontSize: 10
                        }
                    }]
                    },
                    plugins: {
						zoom: {
							pan: {
								enabled: true,
								mode: 'y'
							},
							zoom: {
								enabled: true,
								mode: 'xy'
							}
						}
					}

                }}
                />
            </div>
        )
    }
}
