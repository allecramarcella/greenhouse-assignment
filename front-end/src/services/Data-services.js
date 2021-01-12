import Axios from 'axios'

class DataService {
    constructor(){
        let service = Axios.create({
            baseURL: process.env.REACT_APP_BASE_URL,
            withCredentials: true
        });
        this.service = service
    }

    getDataTomatoes = () => {
        return this.service.get('/data/tomatoes')
        .then(response => {
            return response.data
        })
        .catch(err => console.log(err));
    }

    getDataProduction = () => {
        return this.service.get('/data/production')
        .then(response => {
            return response.data
        })
        .catch(err => console.log(err));
    }

    getDataEnvironment = () => {
        return this.service.get('/data/environment')
        .then(response => {
            return response.data
        })
        .catch(err => console.log(err));
    }

    getDataSoil = () => {
        return this.service.get('/data/soil')
        .then(response => {
            return response.data
        })
        .catch(err => console.log(err));
    }


}

export default DataService