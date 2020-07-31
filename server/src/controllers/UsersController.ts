import { Request, Response, json } from 'express'
import knex from '../database/connection';
import bcrypt from 'bcryptjs';
import authConfig from '../config/auth';
import jwt from 'jsonwebtoken';

class UsersController {

    async show (request: Request, response: Response) {
        try {

            const id = request.params.id;
            
            const user = await knex('users').select('name', 'email', 'password', 'cpf', 'image').where('id', id);
            
            return response.status(200).json(user);
        } catch (err) {
            return response.status(400).send({ error: "Requisition failed"});
        }
    }

    async alter (request: Request, response: Response) {
        try {

            const user = request.body;
            
            const u = await knex('users').select('id', 'cpf', 'email').where('cpf', user.cpf).orWhere('email', user.email);
            if (u[0].id != user.id) {
                const erro = u[0].cpf == user.cpf ? 'CPF' : u[0].email == user.email ? 'Email' : 'CPF and Email'
                return response.status(400).send({ error: `${erro} unavailable`});
            }

            for (var [keys, value] of Object.entries(user)) {
                if (keys === 'password') {
                    const hash = bcrypt.hashSync(user.password, 10);
                    user[keys] = hash;
                } else {
                    user[keys] = value;
                }
            }

            await knex('users')
                .where('id', user.id)
                .update(user);

            request.body.password = undefined;
            
            return response.status(200).send({ success: 'Success updating' });
        } catch (err) {
            return response.status(400).json({ error : 'Error updating user'});
        }
    }

    async create (request: Request, response: Response) {
        try {
            const {
                name,
                password,
                cpf,
                email,
            } = request.body;

            const hash = bcrypt.hashSync(password, 10);

            if (!!(await knex('users').select('*').where('email', email).orWhere('cpf', cpf)).length) {
                return response.status(400).send({ error: 'User already exists'});
            }
    
            await knex('users').insert({
                name,
                password: hash,
                cpf,
                email, 
                image: 'perfil.png',
                enable: '1',
                level: '1',
            })

            request.body.password = undefined;

            return response.status(200).send({ message: 'Registration successful' });
        } catch (err) {
            return response.status(400).send({ error: 'Registration failed' });
        }
    }

    async delete (request: Request, response: Response) {
        try {
            const { id } = request.body;
            await knex('users').where('id', id).del();

            return response.status(200).send({ message: 'Delete successful' });
        } catch (err) {
            return response.status(400).send({ error: 'Delete failed' });
        }
    }

    async index (request: Request, response: Response) {
        try {
            const user = await knex('users').select('*');

            const serializedUsers = user.map(el => {
                return {
                    id: el.id,
                    name: el.name,
                    password: el.password,
                    cpf: el.cpf,
                    email: el.email, 
                    image: `http://192.168.15.6:3333/uploads/${el.image}`,
                    enable: el.enable,
                    level: el.level,
                };
            });

            return response.status(200).json(serializedUsers);
        } catch (err) {
            return response.status(400).send({ error: 'Requisition failed' });
        }
    }

    async authenticate (request: Request, response: Response) {
        try {
            const { email, cpf, password } = request.body;
            
            const user = await knex('users').select('id' ,'name', 'email', 'cpf', 'password', 'level', 'enable').where('cpf', cpf).orWhere('email', email);
            if (!user){
                return response.status(400).send({ error: 'User not found' });
            }
    
            if (!await bcrypt.compare(password, String(user[0].password))) {
                return response.status(400).send({ error: 'Invalid password'});
            }

            if (user[0].online == 0) {
                return response.status(400).send({ error: 'User disabled'});
            }
            
            user[0].password = undefined;

            const token = jwt.sign({ id: user[0].id}, authConfig.secret, {
                expiresIn: 86400,
            });

            return response.json({ user, token});
        } catch (err) {
            return response.status(400).send({ error: 'Requisition failed' });
        }
    }

    async enable (request: Request, response: Response) {
        try {
            const id = request.body;
            const feature = await knex('users').select('enable').where('id', id);

            const change = feature[0].enable == 0 ? 1 : 0;

            await knex('users')
            .where('id', id)
            .update('enable', change);
            
            const option = change == 0 ? 'disable' : 'enable';
            return response.status(200).send({ message: `User ${option}`})
        } catch (err) {
            return response.status(200).send({ error: 'Error updating user'})
        }
    }
}

export default UsersController;