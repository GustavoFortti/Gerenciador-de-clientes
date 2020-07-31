import express from 'express';
import knex from './database/connection'
import UsersController from './controllers/UsersController';

const routes = express.Router();
const usersController = new UsersController();

const def = "/api/users";

routes.get(`${def}/show/:id`, usersController.show);
routes.get(`${def}/authenticate`, usersController.authenticate);
routes.post(`${def}/register`, usersController.create);
routes.put(`${def}/alter/`, usersController.alter);
routes.delete(`${def}/delete`, usersController.delete);

routes.get(`${def}/adm`, usersController.index);
routes.put(`${def}/adm/enable/`, usersController.enable);
routes.put(`${def}/adm/alter/`, usersController.alter);

export default routes;