import http from "../http-common"
import axios from 'axios'
import authHeader from "./auth-header"

const API_URL = 'http://localhost:8080/'

class UploadFilesService {
    upload(file, onUploadProgress, fileName, counterFile) {
        let formData = new FormData()

        formData.append("file", file, fileName+"_"+counterFile+".jpg")

        return axios.post(API_URL + "upload", formData, {
            headers: authHeader(),
            onUploadProgress
        })
    }

    getFiles(gameTitle, fileName) {
        return http.get("/files/"+ gameTitle+"/"+fileName)
    }
}

export default new UploadFilesService()