import Connect from "./Database.js";

async function newsletter() {
    const sql = `CREATE TABLE IF NOT EXISTS newsletter (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome_completo VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        rua VARCHAR(255) NOT NULL,
        complemento VARCHAR(255),
        cidade VARCHAR(255) NOT NULL,
        estado VARCHAR(2) NOT NULL,
        privacy_term BOOLEAN NOT NULL,
        notifications BOOLEAN NOT NULL
    );`;
    const conn = await Connect();
    await conn.query(sql);
}

function run() {
    newsletter();
}

run();
