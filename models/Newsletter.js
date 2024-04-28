export default class Newsletter {
    #id;
    #nome_completo;
    #email;
    #rua;
    #complemento;
    #cidade;
    #estado;
    #privacy_term;
    #notifications;

    constructor(nome_completo, email, rua, complemento, cidade, estado, privacy_term, notifications) {
        this.#nome_completo = nome_completo;
        this.#email = email;
        this.#rua = rua;
        this.#complemento = complemento;
        this.#cidade = cidade;
        this.#estado = estado;
        this.#privacy_term = privacy_term;
        this.#notifications = notifications;
    }

    get id() {
        return this.#id;
    }
    set id(value) {
        this.#id = value;
    }

    get nome_completo() {
        return this.#nome_completo;
    }
    set nome_completo(value) {
        this.#nome_completo = value;
    }

    get email() {
        return this.#email;
    }
    set email(value) {
        this.#email = value;
    }

    get rua() {
        return this.#rua;
    }
    set rua(value) {
        this.#rua = value;
    }

    get complemento() {
        return this.#complemento;
    }
    set complemento(value) {
        this.#complemento = value;
    }

    get cidade() {
        return this.#cidade;
    }
    set cidade(value) {
        this.#cidade = value;
    }

    get estado() {
        return this.#estado;
    }
    set estado(value) {
        this.#estado = value;
    }

    get privacy_term() {
        return this.#privacy_term;
    }
    set privacy_term(value) {
        this.#privacy_term = value;
    }

    get notifications() {
        return this.#notifications;
    }
    set notifications(value) {
        this.#notifications = value;
    }

    toJSON() {
        return {
            id: this.#id,
            nome_completo: this.#nome_completo,
            email: this.#email,
            rua: this.#rua,
            complemento: this.#complemento,
            cidade: this.#cidade,
            estado: this.#estado,
            privacy_term: this.#privacy_term,
            notifications: this.#notifications
        }
    }
}
