import axios from 'axios'

class UserDataServices {
    //POST Request(s)
    createUser(user){
        return axios.get(`http://localhost:8080/create`, user)
    }
}

export default new UserDataServices()