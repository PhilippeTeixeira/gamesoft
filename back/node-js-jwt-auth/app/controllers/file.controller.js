const uploadFile = require('../middleware/upload')
const fs = require('fs')
const baseUrl = "http://localhost:8080/files/"

const upload = async (req, res) => {
    try {
        await uploadFile(req, res)

        if (req.file == undefined) {
            return res.status(400).send({ message: "Please upload a file!" })
        }

        res.status(200).send({
            name: req.file.originalname,
            message: "Le fichier a été envoyé et renommé avec succès: " +req.file.originalname
        })
    } catch (err) {
        if (err.code == "LIMIT_FILE_SIZE"){
            return res.status(500).send({
                message: "Le fichier ne peut dépasser les 2Mo !"
            })
        }
        res.status(500).send({
            message: `Impossible d'uploader le fichier : ${req.file.originalname}. ${err}`
        })
    }
}

const getListFiles = (req, res) => {
    const directoryPath = __basedir + "/resources/static/assets/uploads/" + req.params.gameTitle +"/"
    console.log("Directory path = "+directoryPath)
    console.log(req.params.fileName)
    fs.readdir(directoryPath, function(err, files) {
        if (err) {
            res.status(500).send({
                message: "Unable to scan files!"
            })
        }

        let fileInfos = []

        files.forEach((file) => {
            fileInfos.push({
                name: file,
                url: baseUrl + req.params.gameTitle + "/" + file
            })
        })

        res.status(200).send(fileInfos)
    })
}

const download = (req, res) => {
    const folder = req.params.gameTitle
    const fileName = req.params.name
    const directoryPath = __basedir + "ressources/static/assets/upload/"+folder+"/"
    console.log("je passe par download")

    res.download(directoryPath + fileName, fileName, (err) => {
        if(err) {
            res.status(500).send({
                message: "Impossible de télécharger le fichier. " + err
            })
        }
    })
}



module.exports = {
    upload,
    getListFiles,
    download
}