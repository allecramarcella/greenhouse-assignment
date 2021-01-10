import React, { Component } from 'react'
import DataService from '../../services/Data-services'

import './TomatoDisplay.css'

export default class TomatoDisplay extends Component {

    state = {
        tomatoesData: [],
    }

    dataService = new DataService()

    componentDidMount(){
        this.getDataTomatoes()
    }

    getDataTomatoes = () => {
        this.dataService.getDataTomatoes()
        .then(response => {
            console.log('response getDataTomatoes', response)
            this.setState({
                tomatoesData: response
            })
        })
        .catch(err => console.log(err))
    }

    render() {
        const tomatoesDataArr = this.state.tomatoesData

        return (
            <div className='outer-container'>
                <h2>Tomato type</h2>
                <div className='inner-container'>
                    
                    {tomatoesDataArr.map(tomato => {
                        return (
                            <div key={tomato._id} className='tomato-table'>
                                <h3>{tomato.name}</h3>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Harvest per year</td>
                                            <td>{tomato.harvestPerYear}</td>
                                        </tr>
                                        <tr>
                                            <td>Number of Plants</td>
                                            <td>{tomato.numberOfPlants}</td>                               
                                        </tr>
                                        <tr>
                                            <th>Enivronment condition</th>                           
                                        </tr>
                                        <tr className='low-high-row'>
                                            <td></td>
                                            <td>Low</td>  
                                            <td>High</td>  
                                        </tr>
                                        <tr> 
                                            <td>Light intensity</td>  
                                            <td>{tomato.environmentCondition['light intensity'].low} {tomato.environmentCondition['light intensity'].unit}</td>
                                            <td>{tomato.environmentCondition['light intensity'].high} {tomato.environmentCondition['light intensity'].unit}</td>      
                                                                       
                                        </tr>
                                        <tr>
                                            <td>Relative humidity</td> 
                                            <td>{tomato.environmentCondition['relative humidity'].low} {tomato.environmentCondition['relative humidity'].unit}</td> 
                                            <td>{tomato.environmentCondition['relative humidity'].high} {tomato.environmentCondition['relative humidity'].unit}</td>     
                                        </tr>
                                        <tr>
                                            <td>Temperature</td>
                                        </tr>
                                        <tr>
                                            <td className='temperature-label'>Daytime</td>
                                            <td>{tomato.environmentCondition.temperature.daytime.low} {tomato.environmentCondition.temperature.daytime.unit}</td> 
                                            <td>{tomato.environmentCondition.temperature.daytime.high} {tomato.environmentCondition.temperature.daytime.unit}</td>     
                                        </tr>
                                        <tr>
                                            <td className='temperature-label'>Nighttime</td>
                                            <td>{tomato.environmentCondition.temperature.nighttime.low} {tomato.environmentCondition.temperature.nighttime.unit}</td> 
                                            <td>{tomato.environmentCondition.temperature.nighttime.high} {tomato.environmentCondition.temperature.nighttime.unit}</td> 
                                        </tr>
                                    </tbody>
                                </table>   
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
