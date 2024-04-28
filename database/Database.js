import mysql from 'mysql2/promise'

export default async function connect() {
    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "p2_exame"
    });

    global.connection = connection;

    return connection;
}