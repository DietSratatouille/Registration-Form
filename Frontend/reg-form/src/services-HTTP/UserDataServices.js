import axios from 'axios'

class UserDataServices {
    //GET Request(s)
    listUsers(){
        return axios.get(`http://localhost:8080/listUsers`)
    }

    listOfSchools(){
        return axios.get(`http://localhost:8080/school`)
    }

    listOfMajors(){
        return axios.get(`http://localhost:8080/major`)
    }

    listOfState(){
        return axios.get(`http://localhost:8080/state`)
    }

    //POST Request(s)
    createUser(user){
        return axios.post(`http://localhost:8080/create`, user)
    }

    downloadPDF(file){
        return axios.post(`http://localhost:8080/fileDownload`,file)
    }
}

export default new UserDataServices()

