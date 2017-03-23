"use strict";
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
            first_name: 'Trevor',
            last_name: 'Pellegrini',
            username: 'TDOG',
            email: 'trevorpellegrini@gmail.com',
            hashed_password: "something",
            created_at: new Date('2017-01-29 14:26:16 UTC'),
            updated_at: new Date('2017-01-29 14:26:16 UTC')
        },
        {
            first_name: 'Brandon',
            last_name: 'Pellegrini',
            username: 'BP',
            email: 'brandonpellegrini@gmail.com',
            hashed_password: "something",
            created_at: new Date('2017-01-29 14:26:16 UTC'),
            updated_at: new Date('2017-01-29 14:26:16 UTC')
        },
        {
            first_name: 'Jordan',
            last_name: 'Phelps',
            username: 'JP',
            email: 'jordanphelps@gmail.com',
            hashed_password: "something",
            created_at: new Date('2017-01-29 14:26:16 UTC'),
            updated_at: new Date('2017-01-29 14:26:16 UTC')
        }
      ]);
    });
};
