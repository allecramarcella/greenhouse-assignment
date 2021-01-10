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
            console.log('response getTomatoes services', response)
            return response.data
        })
        .catch(err => console.log(err));
    }

    getDataProduction = () => {
        return this.service.get('/data/production')
        .then(response => {
            console.log('response getProduction services', response)
            return response.data
        })
        .catch(err => console.log(err));
    }
}

export default DataService