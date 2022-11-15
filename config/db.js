const { Pool } = require('pg')
const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'line_track_norbit_db',
    password:'password',
    port:5432
});

module.exports = pool;
