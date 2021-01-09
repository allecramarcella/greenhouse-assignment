import React, { Component } from 'react'
import DataService from '../../services/Data-services'


import './TomatoDisplay.css'

export default class TomatoDisplay extends Component {

    state = {

    }

    dataService = new DataService()

    componentDidMount(){
        this.getDataTomatoes()
    }

    getDataTomatoes = () => {
        this.dataService.getDataTomatoes()
        .then(response => {
            console.log('response getDataTomatoes', response)
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div className='outer-container'>
                <h1>Dashboard</h1>
            </div>
        )
    }
}
