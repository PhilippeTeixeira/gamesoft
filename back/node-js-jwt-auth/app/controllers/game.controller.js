const db = require("../models")
const Game = db.game

exports.addGame = (req, res) => {
    Game.create({
        title: req.body.title,
        description: req.body.description,
        studioName: req.body.studioName,
        pictures: req.body.pictures,
        plateforms: req.body.plateforms,
        priority: req.body.priority,
        score: 0,
        gameEngine: req.body.gameEngine,
        releaseDate: req.body.releaseDate,
        budget: req.body.budget,
        status: req.body.status,
        typeOfGame: req.body.typeOfGame,
        numberOfPlayers: req.body.numberOfPlayers
    }).then(() => {
        res.status(200).send(
            { message: "Le jeu à été ajouté avec succès dans la base de données !"}
        )
    }).catch(err => {
        res.status(500).send ({ message: err.message })
    })
}

exports.getGameSList = (req, res) => {
    var gamesList = []
    Game.findAll({
        
    }).then((games) => {
        for (let game of games) {
            gamesList.push(game)
        }
        res.status(200).send({
             games
        })
    }).catch(err => {
        res.status(500).send({ message: err.message })
    })
}

exports.getIncomingGamesList = (req, res) => {
    var gamesList = []
    Game.findAll({
        where: { status: "En développement" }
    }).then((games) => {
        for (let game of games) {
            gamesList.push(game)
        }
        res.status(200).send({
            games
        })
    }).catch(err => {
        res.status(500).send({ message: err.message })
    })
}

exports.getGameData = (req, res) => {

    const title = req.params.title

    Game.findOne({
        where : {
            title: title
        }
    }).then((game) => {
        console.log(game)
        if (!game) {
            return res.status(404).send({ message: "Le jeu "+title+" n'a pas été trouvé dans la base de données" })
        }
        else {
            return res.status(200).send({ 
                message: "Le jeu "+title+" a bien été trouvé dans la BDD ! ",
                data: game
            })
        }
    })
}

exports.modifyGame = (req, res) => {
    const title = req.params.title
    const data = req.body
    
    console.log("titre : "+title+", data : "+data)

    Game.update((data), {
        where : {
            title: title
        }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: `La donnée a été correctement modifiée !`
            })
        } else {
            res.send({
                message: "La donnée à modifier est introuvable"
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Une erreur s'est produite lors de la modification de donnée"
        })
    })
}

exports.deleteGame = (req, res) => {
    const title = req.body.title
    console.log(title)
    Game.destroy({
        where : {
            title: title
        }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: `Le jeu ${title} a bien été supprimé !`
            })
        } else {
            res.send({
                message: `Le jeu ${title} est introuvable !`
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Une erreur s'est produite lors de la suppression du jeu."
        })
    })
}