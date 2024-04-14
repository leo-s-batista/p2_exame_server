import Inscricao from "../models/Inscricao.js";
import Connect from "./Database.js";

export default class InscricaoDB {    
    static async insert(inscricao) {
        if (inscricao instanceof Inscricao) {

            const sql = "INSERT INTO inscricao (funcaoPretendida, nome, ctpsNumero, serie, dataNascimento, cpf, rg, orgaoEmissor, endereco, numero, bairro, municipio, uf, cep, naturalidade, telefone, celular, email, tituloEleitorNumero, zona, numeroPis, cartHabilitacaoNumero, nomePai, nomeMae, grauInstrucao, curso, residencia, certidaoMilitarNumero, serieMilitar, categoria, possuiFilhos) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
            
            const values = [inscricao.funcaoPretendida, inscricao.nome, inscricao.ctpsNumero, inscricao.serie, inscricao.dataNascimento, inscricao.cpf, inscricao.rg, inscricao.orgaoEmissor, inscricao.endereco, inscricao.numero, inscricao.bairro, inscricao.municipio, inscricao.uf, inscricao.cep, inscricao.naturalidade, inscricao.telefone, inscricao.celular, inscricao.email, inscricao.tituloEleitorNumero, inscricao.zona, inscricao.numeroPis, inscricao.cartHabilitacaoNumero, inscricao.nomePai, inscricao.nomeMae, inscricao.grauInstrucao, inscricao.curso, inscricao.residencia, inscricao.certidaoMilitarNumero, inscricao.serieMilitar, inscricao.categoria, inscricao.possuiFilhos];

            const conn = await Connect();

            const [rs] = await conn.query(sql, values);
            return rs.insertId;
        }
    }

    static async delete(id) {
        const conn = await Connect();

        const sql = "DELETE FROM inscricao WHERE id = ?;";
        const values = [id];

        await conn.query(sql, values);
    }
    static async search(cpf) {
        const result = [];
        const conn = await Connect();
        const [rows] = await conn.query("SELECT * FROM inscricao WHERE cpf LIKE ?", [`%${cpf}%`]);

        for (const row of rows) {
            const inscricao = new Inscricao(row.funcaoPretendida, row.nome, row.ctpsNumero, row.serie, row.dataNascimento, row.cpf, row.rg, row.orgaoEmissor, row.endereco, row.numero, row.bairro, row.municipio, row.uf, row.cep, row.naturalidade, row.telefone, row.celular, row.email, row.tituloEleitorNumero, row.zona, row.numeroPis, row.cartHabilitacaoNumero, row.nomePai, row.nomeMae, row.grauInstrucao, row.curso, row.residencia, row.certidaoMilitarNumero, row.serieMilitar, row.categoria, row.possuiFilhos);
            inscricao.id = row.id;

            result.push(inscricao);
        }

        return result;
    }
}