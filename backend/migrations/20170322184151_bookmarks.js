'use strict';
exports.up = function(knex, Promise) {
    return knex.schema.createTable('bookmark', function(table) {
        table.increments('bookmark_id').primary();
        table.text('url').notNullable().defaultTo('');
        table.string('bookmark_name').notNullable().defaultTo('');
        table.integer('category_id').unsigned().notNullable();
        table.foreign('category_id').references('category_id').inTable('category').onDelete('cascade');
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('bookmark')
    ]);
};
