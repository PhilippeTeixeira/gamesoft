const express = require("express")
const cors = require("cors")

global.__basedir = __dirname

const app = express()

var corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions))


app.use(express.urlencoded({ extended: true }))


// Analyse des requetes de content-type - application/json
app.use(express.json())

// Analyse des requetes de content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// Route basique
app.get("/", (req, res) => {
    res.json({ message: "Bienvenue sur l'application Gamesoft" })
})


//routes
require('./app/routes/auth.routes')(app)
require('./app/routes/user.routes')(app)
require('./app/routes/game.routes')(app)

// configuration du port, écoute des requetes
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Le serveur fonctionne sur le port ${PORT}.`)
})

const db = require("./app/models")
const Role = db.role

// pour la production : remplacer ci-dessous par db.sequelize.sync()
const Dbinit = require("./app/config/initdb")
const User = db.user
const Game = db.game
const Op = db.Sequelize.Op
db.sequelize.sync({force: true}).then(() => {
    console.log('Efface et resynchronise la BDD')
    Dbinit.initial()
})

var bcrypt = require("bcryptjs")
