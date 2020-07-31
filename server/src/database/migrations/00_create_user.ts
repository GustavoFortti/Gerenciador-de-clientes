import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('password').notNullable();
        table.string('cpf').notNullable();
        table.string('email').notNullable();
        table.string('image').notNullable();
        table.string('enable').notNullable();
        table.string('level').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('users');
}