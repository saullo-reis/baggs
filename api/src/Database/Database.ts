import mysql from 'mysql'

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'baggs'
})

database.connect();

database.query('create table IF NOT EXISTS enterprises (id INTEGER AUTO_INCREMENT PRIMARY KEY, NAME_ENTERPRISE TEXT NOT NULL, PASSWORD TEXT, CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP, EMAIL TEXT NOT NULL ); ', (err) => {
    if(err) return console.error(err.message)
})
database.query('create table IF NOT EXISTS inventory (id_item INTEGER AUTO_INCREMENT PRIMARY KEY, ID_ENTERPRISE INTEGER NOT NULL UNIQUE, NAME_ITEM VARCHAR(255) NOT NULL, QNT_ITEM INTEGER, QNT_MIN_ITEM INTEGER);', (err) => {
    if (err) return console.error(err.message)
})

export { database }