"use strict"
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('category').del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
          {
              category_name: 'Programming',
              user_id:1,
              created_at: new Date('2017-01-29 14:26:16 UTC'),
              updated_at: new Date('2017-01-29 14:26:16 UTC')
          },
          {
              category_name:'Golf',
              user_id:1,
              created_at: new Date('2017-01-29 14:26:16 UTC'),
              updated_at: new Date('2017-01-29 14:26:16 UTC')
          },
          {
              category_name: 'Cars',
              user_id:2,
              created_at: new Date('2017-01-29 14:26:16 UTC'),
              updated_at: new Date('2017-01-29 14:26:16 UTC')
          },
          {
              category_name: 'Baseball',
              user_id:2,
              created_at: new Date('2017-01-29 14:26:16 UTC'),
              updated_at: new Date('2017-01-29 14:26:16 UTC')
          },
          {
              category_name: 'Finance',
              user_id:3,
              created_at: new Date('2017-01-29 14:26:16 UTC'),
              updated_at: new Date('2017-01-29 14:26:16 UTC')
          },
          {
              category_name: 'GTI',
              user_id:3,
              created_at: new Date('2017-01-29 14:26:16 UTC'),
              updated_at: new Date('2017-01-29 14:26:16 UTC')
          }
      ]);
    });
};
