'use strict';
exports.up = function(knex, Promise) {
    return knex.schema.createTable('category', function(table) {
        table.increments('id').primary();
        table.string('name').notNullable().defaultTo('');
        table.integer('user_id').unsigned().notNullable();
        table.foreign('user_id').references('id').inTable('users').onDelete('cascade');
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('category')
    ]);
};
