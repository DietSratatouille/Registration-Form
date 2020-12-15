import axios from 'axios'

class UserDataServices {
    //GET Request(s)
    listUsers(){
        return axios.get(`http://localhost:8080/listUsers`)
    }

    //POST Request(s)
    createUser(user){
        return axios.post(`http://localhost:8080/create`, user)
    }
}

export default new UserDataServices()

