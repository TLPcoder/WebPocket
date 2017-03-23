'use strict';
module.exports = {

  development: {
    client: 'postgresql',
    connection: "postgres://localhost/webpocket",
       pool: {
           min: 1,
           max: 1
       }
  },
  test: {
        client: 'postgresql',
        connection: "postgres://localhost/webpocket",
        pool: {
            min: 1,
            max: 1
        }
    }
};
