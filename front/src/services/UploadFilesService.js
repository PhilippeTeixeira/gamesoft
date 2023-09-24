import http from "../http-common"

class UploadFilesService {
    upload(file, onUploadProgress, fileName, counterFile) {
        let formData = new FormData()

        formData.append("file", file, fileName+"_"+counterFile+".jpg")

        return http.post("/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            onUploadProgress
        })
    }

    getFiles() {
        return http.get("/files")
    }
}

export default new UploadFilesService()