import Inscricao from '../models/Inscricao.js';
import InscricaoDB from '../database/InscricaoDB.js';

export default class InscricaoController {
    static insert(inscricao) {
        inscricao = new Inscricao(inscricao.funcaoPretendida, inscricao.nome, inscricao.ctpsNumero, inscricao.serie, inscricao.dataNascimento, inscricao.cpf, inscricao.rg, inscricao.orgaoEmissor, inscricao.endereco, inscricao.numero, inscricao.bairro, inscricao.municipio, inscricao.uf, inscricao.cep, inscricao.naturalidade, inscricao.telefone, inscricao.celular, inscricao.email, inscricao.tituloEleitorNumero, inscricao.zona, inscricao.numeroPis, inscricao.cartHabilitacaoNumero, inscricao.nomePai, inscricao.nomeMae, inscricao.grauInstrucao, inscricao.curso, inscricao.residencia, inscricao.certidaoMilitarNumero, inscricao.serieMilitar, inscricao.categoria, inscricao.possuiFilhos);
        return InscricaoDB.insert(inscricao);
    }
    static delete(id) {
        return InscricaoDB.delete(id);
    }
    static search(term) {
        return InscricaoDB.search(term);
    }
}