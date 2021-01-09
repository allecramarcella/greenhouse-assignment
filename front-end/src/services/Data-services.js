import Axios from 'Axios'

class DataService {
    constructor(){
        let service = Axios.create({
            baseURL: process.env.REACT_APP_BASE_URL,
            withCredentials: true
        })
        this.service = service
    }

}

export default DataService