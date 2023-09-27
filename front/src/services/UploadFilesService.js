import http from "../http-common"
import axios from 'axios'
import authHeader from "./auth-header"

const API_URL = 'http://localhost:8080/'

class UploadFilesService {
    upload(file, onUploadProgress, fileName, counterFile) {
        let formData = new FormData()

        let fixedString
        fixedString = fileName.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

        formData.append("file", file, fixedString+"_"+counterFile+".jpg")

        return axios.post(API_URL + "upload", formData, {
            headers: authHeader(),
            onUploadProgress
        })
    }

    getFiles(gameTitle) {
        let fixedString
        fixedString = gameTitle.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        console.log(fixedString)
        return http.get("/files/"+ fixedString)
    }
}

export default new UploadFilesService()