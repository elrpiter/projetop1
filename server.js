const express = require('express'); // Importa o Express
const sqlite3 = require('sqlite3').verbose(); // Importa o SQLite3
const cors = require('cors'); // Importa o CORS para permitir requisições de outros domínios
const path = require('path'); // Importa o módulo path para manipulação de caminhos de arquivos

const app = express(); // Cria uma instância do Express
const port = 3000; // Define a porta do servidor

// Middlewares
app.use(cors()); // Permite requisições de outros domínios
app.use(express.json()); // Permite o envio de JSON no corpo das requisições
app.use(express.static('public')); // Serve arquivos estáticos da pasta 'public'

// Conexão com o banco
const db = new sqlite3.Database('./db/database.db'); // Cria ou abre o banco de dados SQLite

// Criação da tabela se não existir
db.run(` 
    CREATE TABLE IF NOT EXISTS policiais (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        rg TEXT UNIQUE NOT NULL,
        posto TEXT,
        unidade TEXT,
        escala TEXT
    )
`);

// Rotas

// Página inicial
app.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Envia o arquivo index.html como resposta
});

// Cadastrar policial
app.post('/api/policiais', (req, res) => {
    const { nome, rg, posto, unidade, escala } = req.body;

    const query = `
        INSERT INTO policiais (nome, rg, posto, unidade, escala)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.run(query, [nome, rg, posto, unidade, escala], function(err) {
        if (err) {
            if (err.message.includes('UNIQUE')) {
                return res.status(400).json({ erro: 'RG já cadastrado.' });
            }
            return res.status(500).json({ erro: err.message });
        }
        res.json({ mensagem: 'Policial cadastrado com sucesso!', id: this.lastID });
    });
});

// Buscar policial por nome ou RG
app.get('/api/policiais', (req, res) => {
    const termo = (req.query.termo || '').toLowerCase();

    const query = `
        SELECT * FROM policiais
        WHERE LOWER(nome) = ? OR rg = ?
    `;

    db.get(query, [termo, termo], (err, row) => {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        if (!row) {
            return res.status(404).json({ erro: 'Policial não encontrado' });
        }
        res.json(row);
    });
});

// Listar todos os policiais
app.get('/api/todos', (req, res) => {
    db.all(`SELECT * FROM policiais`, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        res.json(rows);
    });
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
//excluir policial
app.delete('/api/policiais/:id', (req, res) => {
    const id = req.params;
    const query = `DELETE FROM policiais WHERE id = ?`;

    db.run(query, [id], function(err) {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ erro: 'Policial não encontrado' });
        }
        res.json({ mensagem: 'Policial excluído com sucesso!' });
    });
});
// Editar policial
app.put('/api/policiais/:id', (req, res) => { // Rota para editar os dados de um policial
    const { id } = req.params; // Obtém o ID do policial a ser editado
    const { nome, rg, posto, unidade, escala } = req.body; // Obtém os novos dados do corpo da requisição

    const query = ` 
        UPDATE policiais 
        SET nome = ?, rg = ?, posto = ?, unidade = ?, escala = ?
        WHERE id = ? 
    `;

    db.run(query, [nome, rg, posto, unidade, escala, id], function(err) {
        if (err) { // Verifica se houve erro na execução da query
            return res.status(500).json({ erro: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ erro: 'Policial não encontrado.' });
        }
        res.json({ mensagem: 'Dados atualizados com sucesso.' });
    });
});
