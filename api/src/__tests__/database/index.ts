import mysql from 'mysql'

const databaseTeste = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'baggsTeste'
})

const creatingTableCompaniesTeste = () => {databaseTeste.query('CREATE TABLE IF NOT EXISTS companies (\
    id INTEGER AUTO_INCREMENT PRIMARY KEY,\
    NAME_COMPANY VARCHAR(255) NOT NULL UNIQUE,\
    PASSWORD TEXT,\
    CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\
    EMAIL VARCHAR(255) NOT NULL UNIQUE\
);', (err) => {
    if (err) return console.error(err.message);

})}

const creatingTableInventoryTeste = () => { databaseTeste.query('create table IF NOT EXISTS inventory (\
    id_item INTEGER AUTO_INCREMENT PRIMARY KEY,\
    ID_COMPANY INTEGER NOT NULL UNIQUE,\
    NAME_ITEM VARCHAR(255) NOT NULL,\
    QNT_ITEM INTEGER,\
    QNT_MIN_ITEM INTEGER\
    );', (err) => {
    if (err) return console.error(err.message)
})}





export { databaseTeste, creatingTableCompaniesTeste, creatingTableInventoryTeste }