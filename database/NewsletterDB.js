import Newsletter from "../models/Newsletter.js";
import Connect from "./Database.js";

export default class NewsletterDB {    
    static async insert(newsletter) {
        if (newsletter instanceof Newsletter) {

            const sql = "INSERT INTO newsletter (nome_completo, email, rua, complemento, cidade, estado, privacy_term, notifications) VALUES (?, ?, ?, ?, ?, ?, ?, ?);";
            
            const values = [newsletter.nome_completo, newsletter.email, newsletter.rua, newsletter.complemento, newsletter.cidade, newsletter.estado, newsletter.privacy_term, newsletter.notifications];

            const conn = await Connect();

            const [rs] = await conn.query(sql, values);
            return rs.insertId;
        }
    }

    static async delete(id) {
        const conn = await Connect();

        const sql = "DELETE FROM newsletter WHERE id = ?;";
        const values = [id];

        await conn.query(sql, values);
    }

    static async search(email) {
        const result = [];
        const conn = await Connect();
        const [rows] = await conn.query("SELECT * FROM newsletter WHERE email LIKE ?", [`%${email}%`]);

        for (const row of rows) {
            const newsletter = new Newsletter(row.nome_completo, row.email, row.rua, row.complemento, row.cidade, row.estado, row.privacy_term, row.notifications);
            newsletter.id = row.id;

            result.push(newsletter);
        }

        return result;
    }
}
