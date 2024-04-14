import Connect from "./Database.js";

async function inscricao() {
    const sql = `CREATE TABLE IF NOT EXISTS inscricao (
        id INT AUTO_INCREMENT PRIMARY KEY,
        funcaoPretendida VARCHAR(255) NOT NULL,
        nome VARCHAR(70) NOT NULL,
        ctpsNumero VARCHAR(20) NOT NULL,
        serie VARCHAR(20) NOT NULL,
        dataNascimento DATE NOT NULL,
        cpf VARCHAR(20) NOT NULL,
        rg VARCHAR(20) NOT NULL,
        orgaoEmissor VARCHAR(20) NOT NULL,
        endereco VARCHAR(50) NOT NULL,
        numero VARCHAR(20) NOT NULL,
        bairro VARCHAR(50) NOT NULL,
        municipio VARCHAR(50) NOT NULL,
        uf VARCHAR(20) NOT NULL,
        cep VARCHAR(20) NOT NULL,
        naturalidade VARCHAR(50) NOT NULL,
        telefone VARCHAR(20) NOT NULL,
        celular VARCHAR(20) NOT NULL,
        email VARCHAR(70) NOT NULL,
        tituloEleitorNumero VARCHAR(20) NOT NULL,
        zona VARCHAR(20) NOT NULL,
        numeroPis VARCHAR(20) NOT NULL,
        cartHabilitacaoNumero VARCHAR(20) NOT NULL,
        nomePai VARCHAR(70) NOT NULL,
        nomeMae VARCHAR(70) NOT NULL,
        grauInstrucao VARCHAR(50) NOT NULL,
        curso VARCHAR(50) NOT NULL,
        residencia VARCHAR(50) NOT NULL,
        certidaoMilitarNumero VARCHAR(50) NOT NULL,
        serieMilitar VARCHAR(50) NOT NULL,
        categoria VARCHAR(50) NOT NULL,
        possuiFilhos VARCHAR(50) NOT NULL
    );`;
    const conn = await Connect();
    await conn.query(sql);
}

function run() {
    inscricao();
}

run();
