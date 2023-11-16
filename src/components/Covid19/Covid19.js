import React from 'react'
import '../Covid19/Covid19.scss'
import useFecth from '../../Hooks/Fetch';
import Nav from '../Nav/Nav';
export default function Covid19() {
    const { data: dataCovid19, loading, iserror } = useFecth('https://api.apify.com/v2/key-value-stores/EaCBL1JNntjR3EakU/records/LATEST?disableRedirect=true')
    let dataLocation = dataCovid19.locations || [];
    return (
        <>
            <Nav />
            <table id="customers">
                {console.log('checkDataCovid', dataLocation)}
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Cases</th>
                        <th>Death</th>
                    </tr>
                </thead>
                <tbody>
                    {loading === true ?
                        <tr>
                            <td>Loading...</td>
                        </tr>
                        :
                        dataLocation.map((item, index) => {
                            return (
                                <tr key={index} >
                                    <td>{item.name}</td>
                                    <td>{item.cases}</td>
                                    <td>{item.death}</td>
                                </tr>
                            )
                        })
                    }
                    {iserror === true && <>
                        <tr>
                            <td>Somethings wrong...</td>
                        </tr>
                    </>}
                </tbody>
            </table>
        </>
    )
}
