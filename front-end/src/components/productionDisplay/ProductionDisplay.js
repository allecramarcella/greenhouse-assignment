import React, { Component } from 'react'
import DataService from '../../services/Data-services'

import './ProductionDisplay.css'


export default class ProductionDisplay extends Component {

    state = {
        productionData: []
    }

    dataService = new DataService()

    componentDidMount(){
        this.getDataProduction()
    }

    getDataProduction = () => {
        this.dataService.getDataProduction()
        .then(response => {
            console.log('response getDataProduction', response)
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

        this.setState({
            productionData: productionDataConverted
        })
    }


    render() {
        const productionDataArr = this.state.productionData

        return (
            <div className='outer-container-production'>
                <h2>Production</h2>
                <div className='inner-container'>
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
