import Newsletter from '../models/Newsletter.js';
import NewsletterDB from '../database/NewsletterDB.js';

export default class NewsletterController {
    static insert(newsletter) {
        newsletter = new Newsletter(newsletter.nome_completo, newsletter.email, newsletter.rua, newsletter.complemento, newsletter.cidade, newsletter.estado, newsletter.privacy_term, newsletter.notifications);
        return NewsletterDB.insert(newsletter);
    }
    static delete(id) {
        return NewsletterDB.delete(id);
    }
    static search(email) {
        return NewsletterDB.search(email);
    }
}
