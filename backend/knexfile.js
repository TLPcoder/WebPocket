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
    // production: {
    //     client: 'postgresql',
    //     connection: 'postgres://flpggitlkyrukq:a5c45927a874f2811da42253c2012526d39456882057fcdbe8632529bb8f7a5b@ec2-54-243-252-91.compute-1.amazonaws.com:5432/dc7trgn4mhn27d'
    // },
    test: {
        client: 'postgresql',
        connection: "postgres://localhost/webpocket",
        pool: {
            min: 1,
            max: 1
        }
    }
};
