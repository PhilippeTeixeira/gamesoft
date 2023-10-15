const db = require("../models")
const Role = db.role 
const User = db.user 
const Game = db.game 

var bcrypt = require("bcryptjs")

exports.initial = () => {
    Role.create({
        id: 1,
        name: "user"
    })

    Role.create({
        id: 2,
        name: "admin"
    })

    Role.create({
        id: 3,
        name: "producer"
    })

    Role.create({
        id: 4,
        name: "community_manager"
    })

    User.create({
        username: 'admin',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123456789', 8),
    }).then(user => {
        Role.findAll({
            where: {
                name: 'admin'
            }
        }).then(roles => {
            user.setRoles(2)
        })
    })
    User.create({
        username: 'producteur',
        email: 'producteur@gmail.com',
        password: bcrypt.hashSync('123456789', 8),
    }).then(user => {
        Role.findAll({
            where: {
                name: 'producer'
            }
        }).then(roles => {
            user.setRoles(3)
        })
    })
    User.create({
        username: 'cm',
        email: 'cm@gmail.com',
        password: bcrypt.hashSync('123456789', 8),
    }).then(user => {
        Role.findAll({
            where: {
                name: 'communitymanager'
            }
        }).then(roles => {
            user.setRoles(4)
        })
    })
    User.create({
        username: 'user',
        email: 'user@gmail.com',
        password: bcrypt.hashSync('123456789', 8),
    }).then(user => {
        Role.findAll({
            where: {
                name: 'user'
            }
        }).then(roles => {
            user.setRoles(1)
        })
    })

    Game.create({
        title: "Demonio",
        description: "Le jeu dans lequel vous tenterez le diable !",
        studioName: "Gamesoft",
        pictures: "./front/src/assets/demonio_background.jpg",
        plateforms: "PC",
        priority: "5",
        score: "0",
        gameEngine: "Unreal Engine",
        releaseDate: "2024-12-31",
        budget: "20000",
        status: "En développement",
        typeOfGame: "RPG",
        numberOfPlayers: "2"
    })
    Game.create({
        title: "Neverwinter Days",
        description: "Les jours de Padhivers vous attendent.",
        studioName: "Gamesoft",
        pictures: "./front/src/assets/demonio_background.jpg",
        plateforms: "PC",
        priority: "4",
        score: "0",
        gameEngine: "Unity",
        releaseDate: "2025-12-31",
        budget: "15000",
        status: "En développement",
        typeOfGame: "RPG",
        numberOfPlayers: "4"
    })
    Game.create({
        title: "Baladur's Doors",
        description: "Ouvrez les portes de...",
        studioName: "Gamesoft",
        pictures: "./front/src/assets/demonio_background.jpg",
        plateforms: "PC",
        priority: "5",
        score: "0",
        gameEngine: "Unreal Engine",
        releaseDate: "2024-10-15",
        budget: "30000",
        status: "En développement",
        typeOfGame: "RPG",
        numberOfPlayers: "6"
    })
    Game.create({
        title: "Skygrim",
        description: "Incarnez le Dovaghrin et combattez des Balrogs.",
        studioName: "Gamesoft",
        pictures: "./front/src/assets/demonio_background.jpg",
        plateforms: "PC",
        priority: "5",
        score: "0",
        gameEngine: "Unreal Engine",
        releaseDate: "2026-04-25",
        budget: "40000",
        status: "En développement",
        typeOfGame: "RPG",
        numberOfPlayers: "1"
    })
    Game.create({
        title: "The Sorcerer",
        description: "Un jeu dans lequel vous incarnez ni plus ni moins qu'un Sorcier !",
        studioName: "Gamesoft",
        pictures: "./front/src/assets/demonio_background.jpg",
        plateforms: "XBoite",
        priority: "5",
        score: "0",
        gameEngine: "Unreal Engine",
        releaseDate: "2025-03-11",
        budget: "25000",
        status: "En développement",
        typeOfGame: "RPG",
        numberOfPlayers: "1"
    })
    Game.create({
        title: "Fallup",
        description: "Tomber vers le ciel ? C'est possible !",
        studioName: "Gamesoft",
        pictures: "./front/src/assets/demonio_background.jpg",
        plateforms: "PC",
        priority: "5",
        score: "0",
        gameEngine: "Unity",
        releaseDate: "2024-12-31",
        budget: "13000",
        status: "En développement",
        typeOfGame: "RPG",
        numberOfPlayers: "1"
    })
    Game.create({
        title: "Conqueror's Sword",
        description: "Serez-vous une fine lame dans ce tout nouveau RPG stratégique ?",
        studioName: "Gamesoft",
        pictures: "./front/src/assets/demonio_background.jpg",
        plateforms: "PC",
        priority: "5",
        score: "0",
        gameEngine: "Unity",
        releaseDate: "2024-11-26",
        budget: "10000",
        status: "En développement",
        typeOfGame: "RPG",
        numberOfPlayers: "1"
    })
    Game.create({
        title: "Divination Original Sin",
        description: "Faire de la divination est un péché !",
        studioName: "Gamesoft",
        pictures: "./front/src/assets/demonio_background.jpg",
        plateforms: "PC",
        priority: "5",
        score: "0",
        gameEngine: "Unity",
        releaseDate: "2024-12-31",
        budget: "16000",
        status: "En développement",
        typeOfGame: "RPG",
        numberOfPlayers: "2"
    })
    Game.create({
        title: "Tempest Dale",
        description: "Brr... Il fait froid ici !",
        studioName: "Gamesoft",
        pictures: "./front/src/assets/demonio_background.jpg",
        plateforms: "PC",
        priority: "2",
        score: "0",
        gameEngine: "Unity",
        releaseDate: "2025-01-20",
        budget: "7000",
        status: "En développement",
        typeOfGame: "RPG",
        numberOfPlayers: "6"
    })
    Game.create({
        title: "The Teacher",
        description: "Apprenez le métier de Sorcier",
        studioName: "Gamesoft",
        pictures: "./front/src/assets/demonio_background.jpg",
        plateforms: "PC",
        priority: "5",
        score: "0",
        gameEngine: "Unreal Engine",
        releaseDate: "2023-12-31",
        budget: "20000",
        status: "En production",
        typeOfGame: "RPG",
        numberOfPlayers: "21"
    })
    Game.create({
        title: "Firewind Dale",
        description: "Pfiou ! Il fait chaud ici !",
        studioName: "Gamesoft",
        pictures: "./front/src/assets/demonio_background.jpg",
        plateforms: "PC",
        priority: "5",
        score: "0",
        gameEngine: "Unity",
        releaseDate: "2023-02-13",
        budget: "20000",
        status: "En production",
        typeOfGame: "RPG",
        numberOfPlayers: "6"
    })
    Game.create({
        title: "Cyclope Quest",
        description: "Vous avez l'oeil, et le bon ! (et le seul...)",
        studioName: "Gamesoft",
        pictures: "./front/src/assets/demonio_background.jpg",
        plateforms: "PC",
        priority: "5",
        score: "0",
        gameEngine: "Unity",
        releaseDate: "2024-12-31",
        budget: "17000",
        status: "En production",
        typeOfGame: "RPG",
        numberOfPlayers: "4"
    })
}