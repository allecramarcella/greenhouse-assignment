import React, { Component } from 'react'
import DataService from '../../services/Data-services'


import './TomatoDisplay.css'

export default class TomatoDisplay extends Component {

    state = {
        tomatoesData: [],
        productionData: []
    }

    dataService = new DataService()

    componentDidMount(){
        this.getDataTomatoes()
        this.getDataProduction()
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

    getDataProduction = () => {
        this.dataService.getDataProduction()
        .then(response => {
            console.log('response getDataProduction', response)
            // const date = new Data (response.harvestDate)
            // this.setState({
            //     productionData: response
            // })
            this.convertDate(response)
        })
        .catch(err => console.log(err))
    }

    convertDate = (productionData) => {
        const productionDataConverted = productionData.map(data => {
            const convertedDate = new Date(data.harvestDate).toLocaleString()
            data.harvestDate = convertedDate
            return data
        })

        console.log(productionDataConverted)
        
        this.setState({
            productionData: productionDataConverted
        })
    }

    render() {
        const tomatoesDataArr = this.state.tomatoesData
        const productionDataArr = this.state.productionData

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
                                        <tr>
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
                                            <td>Daytime</td>
                                            <td>{tomato.environmentCondition.temperature.daytime.low} {tomato.environmentCondition.temperature.daytime.unit}</td> 
                                            <td>{tomato.environmentCondition.temperature.daytime.high} {tomato.environmentCondition.temperature.daytime.unit}</td>     
                                        </tr>
                                        <tr>
                                            <td>Nighttime</td>
                                            <td>{tomato.environmentCondition.temperature.nighttime.low} {tomato.environmentCondition.temperature.nighttime.unit}</td> 
                                            <td>{tomato.environmentCondition.temperature.nighttime.high} {tomato.environmentCondition.temperature.nighttime.unit}</td> 
                                        </tr>
                                    </tbody>
                                </table>   
                            </div>
                        )
                    })}

                    {productionDataArr.map(production => {
                        return (
                            <div key={production._id}>
                                <h3>{production.name}</h3>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Harvest date</td>
                                            <td>{production.harvestDate}</td>
                                        </tr>
                                        <tr>
                                            <td>Number of plants</td>
                                            <td>{production.numberOfPlants}</td>                               
                                        </tr>
                                        <tr>
                                            <td>Weight in ton</td>
                                            <td>{production.weightInTon}</td> 
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
