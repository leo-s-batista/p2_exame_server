import express from 'express';
import cors from 'cors';
import InscricaoController from './controllers/InscricaoController.js';

const app = express();
const api = express.Router();

app.use(cors()); 

app.use(express.json());

api.get('/inscricao/:cpf', (req, res) => {
    InscricaoController.search(req.params.cpf).then((result) => {
        res.json(result);
    });
});
api.post('/inscricao', (req, res) => {
    InscricaoController.insert(req.body).then((result) => {
        res.json(result);
    });
});
api.delete('/inscricao/:id', (req, res) => {
    InscricaoController.delete(req.params.id).then((result) => {
        res.json(result);
    });
});

app.use('/api', api);

app.listen(4000, () => {
    console.log('Servidor rodando na porta 4000');
});