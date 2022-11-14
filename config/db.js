const { Pool } = require('pg')
const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'line_track_norbit_db',
    password:'memikat',
    port:5432
});

module.exports = pool;