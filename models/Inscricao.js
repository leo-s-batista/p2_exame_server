export default class Inscricao {
    #id;
    #funcaoPretendida;
    #nome;
    #ctpsNumero;
    #serie;
    #dataNascimento;
    #cpf;
    #rg;
    #orgaoEmissor;
    #endereco;
    #numero;
    #bairro;
    #municipio;
    #uf;
    #cep;
    #naturalidade;
    #telefone;
    #celular;
    #email;
    #tituloEleitorNumero;
    #zona;
    #numeroPis;
    #cartHabilitacaoNumero;
    #nomePai;
    #nomeMae;
    #grauInstrucao;
    #curso;
    #residencia;
    #certidaoMilitarNumero;
    #serieMilitar;
    #categoria;
    #possuiFilhos;

    constructor(funcaoPretendida, nome, ctpsNumero, serie, dataNascimento, cpf, rg, orgaoEmissor, endereco, numero, bairro, municipio, uf, cep, naturalidade, telefone, celular, email, tituloEleitorNumero, zona, numeroPis, cartHabilitacaoNumero, nomePai, nomeMae, grauInstrucao, curso, residencia, certidaoMilitarNumero, serieMilitar, categoria, possuiFilhos) {
        this.#funcaoPretendida = funcaoPretendida;
        this.#nome = nome;
        this.#ctpsNumero = ctpsNumero;
        this.#serie = serie;
        this.#dataNascimento = dataNascimento;
        this.#cpf = cpf;
        this.#rg = rg;
        this.#orgaoEmissor = orgaoEmissor;
        this.#endereco = endereco;
        this.#numero = numero;
        this.#bairro = bairro;
        this.#municipio = municipio;
        this.#uf = uf;
        this.#cep = cep;
        this.#naturalidade = naturalidade;
        this.#telefone = telefone;
        this.#celular = celular;
        this.#email = email;
        this.#tituloEleitorNumero = tituloEleitorNumero;
        this.#zona = zona;
        this.#numeroPis = numeroPis;
        this.#cartHabilitacaoNumero = cartHabilitacaoNumero;
        this.#nomePai = nomePai;
        this.#nomeMae = nomeMae;
        this.#grauInstrucao = grauInstrucao;
        this.#curso = curso;
        this.#residencia = residencia;
        this.#certidaoMilitarNumero = certidaoMilitarNumero;
        this.#serieMilitar = serieMilitar;
        this.#categoria = categoria;
        this.#possuiFilhos = possuiFilhos;
    }

    get id() {
        return this.#id;
    }
    set id(value) {
        this.#id = value;
    }

    get funcaoPretendida() {
        return this.#funcaoPretendida;
    }
    set funcaoPretendida(value) {
        this.#funcaoPretendida = value;
    }

    get nome() {
        return this.#nome;
    }
    set nome(value) {
        this.#nome = value;
    }

    get ctpsNumero() {
        return this.#ctpsNumero;
    }
    set ctpsNumero(value) {
        this.#ctpsNumero = value;
    }

    get serie() {
        return this.#serie;
    }
    set serie(value) {
        this.#serie = value;
    }

    get dataNascimento() {
        return this.#dataNascimento;
    }
    set dataNascimento(value) {
        this.#dataNascimento = value;
    }

    get cpf() {
        return this.#cpf;
    }
    set cpf(value) {
        this.#cpf = value;
    }

    get rg() {
        return this.#rg;
    }
    set rg(value) {
        this.#rg = value;
    }

    get orgaoEmissor() {
        return this.#orgaoEmissor;
    }
    set orgaoEmissor(value) {
        this.#orgaoEmissor = value;
    }

    get endereco() {
        return this.#endereco;
    }
    set endereco(value) {
        this.#endereco = value;
    }

    get numero() {
        return this.#numero;
    }
    set numero(value) {
        this.#numero = value;
    }

    get bairro() {
        return this.#bairro;
    }
    set bairro(value) {
        this.#bairro = value;
    }

    get municipio() {
        return this.#municipio;
    }
    set municipio(value) {
        this.#municipio = value;
    }

    get uf() {
        return this.#uf;
    }
    set uf(value) {
        this.#uf = value;
    }

    get cep() {
        return this.#cep;
    }
    set cep(value) {
        this.#cep = value;
    }

    get naturalidade() {
        return this.#naturalidade;
    }
    set naturalidade(value) {
        this.#naturalidade = value;
    }

    get telefone() {
        return this.#telefone;
    }
    set telefone(value) {
        this.#telefone = value;
    }

    get celular() {
        return this.#celular;
    }
    set celular(value) {
        this.#celular = value;
    }

    get email() {
        return this.#email;
    }
    set email(value) {
        this.#email = value;
    }

    get tituloEleitorNumero() {
        return this.#tituloEleitorNumero;
    }
    set tituloEleitorNumero(value) {
        this.#tituloEleitorNumero = value;
    }

    get zona() {
        return this.#zona;
    }
    set zona(value) {
        this.#zona = value;
    }

    get numeroPis() {
        return this.#numeroPis;
    }
    set numeroPis(value) {
        this.#numeroPis = value;
    }

    get cartHabilitacaoNumero() {
        return this.#cartHabilitacaoNumero;
    }
    set cartHabilitacaoNumero(value) {
        this.#cartHabilitacaoNumero = value;
    }

    get nomePai() {
        return this.#nomePai;
    }
    set nomePai(value) {
        this.#nomePai = value;
    }

    get nomeMae() {
        return this.#nomeMae;
    }
    set nomeMae(value) {
        this.#nomeMae = value;
    }
    get grauInstrucao() {
        return this.#grauInstrucao;
    }
    set grauInstrucao(value) {
        this.#grauInstrucao = value;
    }
    get curso() {
        return this.#curso;
    }
    set curso(value) {
        this.#curso = value;
    }
    get residencia() {
        return this.#residencia;
    }
    set residencia(value) {
        this.#residencia = value;
    }
    get certidaoMilitarNumero() {
        return this.#certidaoMilitarNumero;
    }
    set certidaoMilitarNumero(value) {
        this.#certidaoMilitarNumero = value;
    }
    get serieMilitar() {
        return this.#serieMilitar;
    }
    set serieMilitar(value) {
        this.#serieMilitar = value;
    }
    get categoria() {
        return this.#categoria;
    }
    set categoria(value) {
        this.#categoria = value;
    }
    get possuiFilhos() {
        return this.#possuiFilhos;
    }
    set possuiFilhos(value) {
        this.#possuiFilhos = value;
    }


    toJSON() {
        return {
            id: this.#id,
            funcaoPretendida: this.#funcaoPretendida,
            nome: this.#nome,
            ctpsNumero: this.#ctpsNumero,
            serie: this.#serie,
            dataNascimento: this.#dataNascimento,
            cpf: this.#cpf,
            rg: this.#rg,
            orgaoEmissor: this.#orgaoEmissor,
            endereco: this.#endereco,
            numero: this.#numero,
            bairro: this.#bairro,
            municipio: this.#municipio,
            uf: this.#uf,
            cep: this.#cep,
            naturalidade: this.#naturalidade,
            telefone: this.#telefone,
            celular: this.#celular,
            email: this.#email,
            tituloEleitorNumero: this.#tituloEleitorNumero,
            zona: this.#zona,
            numeroPis: this.#numeroPis,
            cartHabilitacaoNumero: this.#cartHabilitacaoNumero,
            nomePai: this.#nomePai,
            nomeMae: this.#nomeMae,
            grauInstrucao: this.#grauInstrucao,
            curso: this.#curso,
            residencia: this.#residencia,
            certidaoMilitarNumero: this.#certidaoMilitarNumero,
            serieMilitar: this.#serieMilitar,
            categoria: this.#categoria,
            possuiFilhos: this.#possuiFilhos
        }
    }
}
