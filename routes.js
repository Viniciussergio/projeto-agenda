const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const contatoController = require('./src/controllers/contatoController');

const {loginRequired} = require('./src/middlewares/middleware');

// Rotas da Home
route.get('/agenda', homeController.index);

// Rotas de Login
route.get('/agenda/login/index', loginController.index);
route.post('/agenda/login/register', loginController.register);
route.post('/agenda/login/login', loginController.login);
route.get('/agenda/login/logout', loginController.logout);

//Rotas de Contato
route.get('/agenda/contato/index', loginRequired, contatoController.index);
route.get('/agenda/contato/index/:id', loginRequired, contatoController.editIndex);
route.post('/agenda/contato/register', loginRequired, contatoController.register);
route.post('/agenda/contato/edit/:id', loginRequired, contatoController.edit);
route.get('/agenda/contato/delete/:id', loginRequired, contatoController.delete);

module.exports = route;
