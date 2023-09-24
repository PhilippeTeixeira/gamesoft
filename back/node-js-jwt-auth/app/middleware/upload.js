const util = require('util')
const multer = require('multer')
const maxSize = 2 * 1024 * 1024
const fs = require("fs")
const path = require("path")

let storage= multer.diskStorage({
    destination: (req, file, cb) => {
        let stopCount
        for (i=file.originalname.length; i>0; i--){
            if (file.originalname.charAt(i) == "_"){
                stopCount = i
                console.log(file.originalname.length + "stop count = "+ i)
            }
        }
        let folder = file.originalname.slice(0, stopCount)
        console.log(folder)
        const folderPath = "/resources/static/assets/uploads/"
        fs.mkdir(path.join(__basedir+ folderPath, folder), { recursive: true }, (err) => {
            if (err) {
                return console.error(err)
            }
            console.log('Dossier crée avec succès')
        })
        cb(null, __basedir + folderPath + folder )
    },
    filename: (req, file, cb) => {
        console.log(path.extname(file.originalname))
        cb(null, file.originalname)
    }
})

let uploadFile = multer({
    storage: storage,
    limits: { fileSize: maxSize }
}).single("file")

let uploadFileMiddleware = util.promisify(uploadFile)

module.exports = uploadFileMiddleware