const pideController = require('../controllers/pide');
const express = require('express');
const pideRouter = express.Router();

// /pide/* requests
pideRouter.get('/browse', pideController.browse);
pideRouter.get('/search', pideController.search);
pideRouter.get('/auth/register', pideController.auth.register);
pideRouter.get('/auth/login', pideController.auth.login);
pideRouter.get('/groupbuy/s', pideController.groupbuy.s);
pideRouter.get('/groupbuy/get/:id', pideController.groupbuy.get);
pideRouter.post('/groupbuy/new', pideController.groupbuy.new);
pideRouter.post('/groupbuy/edit', pideController.groupbuy.edit);
pideRouter.get('/groupbuy/delete/:id', pideController.groupbuy.delete);
pideRouter.post('/groupbuy/join', pideController.groupbuy.join);
pideRouter.post('/groupbuy/leave', pideController.groupbuy.leave);

module.exports = pideRouter;
