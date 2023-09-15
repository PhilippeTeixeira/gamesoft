const { verifyGame } = require("../middleware")
const { authJwt } = require("../middleware")
const controller = require("../controllers/game.controller")

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"            
        )
        next()
    })

    app.post(
        "/api/game/addgame",
        [authJwt.verifyToken, ( authJwt.isAdmin || authJwt.isProducer ), verifyGame.checkDuplicateGame],
        controller.addGame
    )

    app.get(
        "/api/game/gameslist",
        controller.getGameSList
    )
    app.get(
        "/api/game/incominggameslist",
        controller.getIncomingGamesList
    )
    app.get(
        "/api/game/gamedata/:title",
        [authJwt.verifyToken, ( authJwt.isAdmin || authJwt.isProducer )],
        controller.getGameData
    )
    app.put(
        "/api/game/modifygame/:title",
        [authJwt.verifyToken, ( authJwt.isAdmin || authJwt.isProducer )],
        controller.modifyGame
    )
    app.post(
        "/api/game/deletegame",
        [authJwt.verifyToken, authJwt.isAdmin ],
        controller.deleteGame
    )
}