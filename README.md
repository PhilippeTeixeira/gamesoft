# Pré-requis :
Node.js
mySQL

# Installation :
Database (on mySQL server):

create database gamesoftdb;
use gamesoftdb;

Back-end : 

cd node-js-jwt-auth
npm install express sequelize mysql2 cors jsonwebtoken bcryptjs multer --save
node server.js

Front-end :

cd front
npm install @vue/cli vue-router vuex yup axios bootstrap jquery popper.js @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/vue-fontawesome
vue ui
