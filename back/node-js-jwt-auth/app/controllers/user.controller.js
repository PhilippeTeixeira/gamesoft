const db = require("../models");
const User = db.user;
const config = require("../config/auth.config")
var jwt = require("jsonwebtoken")

exports.allAccess = (req, res) => {
  res.status(200).send("Contenu Public")
}

exports.userBoard = (req, res) => {
  res.status(200).send("Contenu Utilisateur")
}

exports.adminBoard = (req, res) => {
  res.status(200).send("Contenu Administrateur")
}

exports.producerBoard = (req, res) => {
  res.status(200).send("Contenu Producteur/Productrice")
}

exports.CMBoard = (req, res) => {
  res.status(200).send("Contenu Community Manager")
}

exports.update = (req, res) => {

  const id = req.params.id;

  User.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully.",
          username: req.body.username,
          email: req.body.email
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};

exports.changePassword = (req, res) => {
  const id = req.params.id
  const token = jwt.sign({ id: id },
    config.secret,
    { 
      algorithm: 'HS256',
      allowInsecureKeySizes: true,
      expiresIn: 86400
    })
  User.update(req.body, {
    where: { id: id }
  }).then(num => {
    if (num == 1) {

      res.send({
        message: "Le mot de passe a bien été changé",
        token: token
      })
    } else {
      res.send({
        message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
      })
    }
  }).catch(err => {
    res.status(500).send({
      message: "Error updating User with id=" + id
    })
  })
}