import express from 'express';
import cors from 'cors';
import NewsletterController from './controllers/NewsletterController.js';

const app = express();
const api = express.Router();

app.use(cors()); 

app.use(express.json());

api.get('/newsletter/:email', (req, res) => {
    NewsletterController.search(req.params.email).then((result) => {
        res.json(result);
    });
});
api.post('/newsletter', (req, res) => {
    NewsletterController.insert(req.body).then((result) => {
        res.json(result);
    });
});
api.delete('/newsletter/:id', (req, res) => {
    NewsletterController.delete(req.params.id).then((result) => {
        res.json(result);
    });
});

app.use('/api', api);

app.listen(4000, () => {
    console.log('Servidor rodando na porta 4000');
});