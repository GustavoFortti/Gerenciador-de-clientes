import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('users').insert([
        { name: 'Gustavo', password: '00000000', cpf: '99999999999', email: 'gustavofortti@gmail.com', image: 'perfil.png', enable:'0', level:'999' },
    ]);
}