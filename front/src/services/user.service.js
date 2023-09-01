import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://localhost:8080/api/test/'

class UserService {
    getPublicContent() {
        return axios.get(API_URL + 'all')
    }

    getUserBoard() {
        return axios.get(API_URL + 'user', { headers: authHeader() })
    }

    getAdminBoard() {
        return axios.get(API_URL + 'admin', { headers: authHeader() })
    }

    getProducerBoard() {
        return axios.get(API_URL + 'producer', { headers: authHeader() })
    }

    getCMBoard() {
        return axios.get(API_URL + 'cm', { headers: authHeader() })
    }

    update(id, data) {
        return axios.put(API_URL + 'update/' + id, data, { headers: authHeader() })
        .then(response => {
          let oldLocalStorageContent = JSON.parse(localStorage.getItem('user'))
          oldLocalStorageContent.username = response.data.username
          oldLocalStorageContent.email = response.data.email
          localStorage.setItem('user', JSON.stringify(oldLocalStorageContent))
          return response.data
        });
    }

    changePassword(id, data) {
        return axios.put(API_URL + 'changepwd/' + id, data, { headers: authHeader() })
        .then(response => {
            let oldLocalStorageContent = JSON.parse(localStorage.getItem('user'))
            oldLocalStorageContent.accessToken = response.data.token
            localStorage.setItem('user', JSON.stringify(oldLocalStorageContent))
            return response.data
        })
    }
}

export default new UserService()