import React from 'react'
import './ProductionDisplay.css'

export default function ProductionDisplay(props) {
    const productionDataArr = props.productionData

    return (
        <div className='outer-container-production'>
            <h2>Production</h2>
            <div className='inner-container-production'>
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
