const express = require('express');
const app = express();
const port = 3000;

// Importando o CORS
const cors = require('cors');

// Habilitando CORS para todas as rotas
app.use(cors());  // Aqui você habilita o CORS

// Simulando o mock de livros no arquivo mock-livros.ts
const livros = [

    //Romance
    {
        titulo: 'As ondas',
        autoria: 'Virginia Woolf',
        imagem: 'as-ondas.png',
        genero: {
            id: 'romance',
            value: 'Romance',
            livros: []
        },
        favorito: false
    },
    {
        titulo: 'Alice no país das maravilhas',
        autoria: 'Lewis Carroll',
        imagem: 'alice.png',
        genero: {
            id: 'romance',
            value: 'Romance',
            livros: []
        },
        favorito: false
    },
    {
        titulo: 'Moby Dick',
        autoria: 'Herman Melville',
        imagem: 'moby-dick.png',
        genero: {
            id: 'romance',
            value: 'Romance',
            livros: []
        },
        favorito: false
    },

    //Mistério
    {
        titulo: 'E não sobrou nenhum',
        autoria: 'Agatha Christie',
        imagem: 'nao-sobrou-nenhum.png',
        genero: {
            id: 'misterio',
            value: 'Mistério',
            livros: []
        },
        favorito: false
    },

    //Fantasia
    {
        titulo: 'O mágico de Oz',
        autoria: 'L. Frank Baum',
        imagem: 'magico-de-oz.png',
        genero: {
            id: 'fantasia',
            value: 'Fantasia',
            livros: []
        },
        favorito: false
    },


    //Ficção-científia
    {
        titulo: 'Ecos',
        autoria: 'Pam Muñoz',
        imagem: 'ecos.png',
        genero: {
            id: 'ficcao-cientifica',
            value: 'Ficção Científica',
            livros: []
        },
        favorito: false
    },
    {
        titulo: 'Fahrenheit 451',
        autoria: 'Ray Bradbury',
        imagem: 'fahrenheit.png',
        genero: {
            id: 'ficcao-cientifica',
            value: 'Ficção Científica',
            livros: []
        },
        favorito: false
    },
    {
        titulo: 'Admirável mundo novo',
        autoria: 'Aldous Huxley',
        imagem: 'admiravel-mundo-novo.png',
        genero: {
            id: 'ficcao-cientifica',
            value: 'Ficção Científica',
            livros: []
        },
        favorito: false
    },



    // {
    //   titulo: 'Estruturas de dados',
    //   autoria: 'Loiane Groner',
    //   imagem: 'link-imagem',
    //   genero: {
    //     id: 'tecnicos',
    //     value: 'Técnicos',
    //     livros: []
    //   },
    //   favorito: false
    // },
    // {
    //   titulo: 'Lógica de programação',
    //   autoria: 'Edecio Fernando',
    //   imagem: 'link-imagem',
    //   genero: {
    //     id: 'tecnicos',
    //     value: 'Técnicos',
    //     livros: []
    //   },
    //   favorito: false
    // },
    // {
    //   titulo: 'Cangaceiro JavaScript',
    //   autoria: 'Flavio Almeida',
    //   imagem: 'link-imagem',
    //   genero: {
    //     id: 'tecnicos',
    //     value: 'Técnicos',
    //     livros: []
    //   },
    //   favorito: false
    // },


    // {
    //   titulo: 'JavaScript - o guia definitivo',
    //   autoria: 'David Flanagan',
    //   imagem: 'link-imagem',
    //   genero: {
    //     id: 'tecnicos',
    //     value: 'Técnicos',
    //     livros: []
    //   },
    //   favorito: false
    // },

];

// Rota para a raiz
app.get('/', (req, res) => {
    res.send('Bem-vindo à API de livros!');
});

// Rota para retornar todos os livros
app.get('/api/livros', (req, res) => {
    res.json(livros);
});

// Rota para retornar livros filtrados por gênero
app.get('/api/livros/genero/:generoId', (req, res) => {
    const generoId = req.params.generoId;
    const livrosFiltrados = livros.filter(livro => livro.genero.id === generoId);
    res.json(livrosFiltrados);
});

// Rota para retornar um livro pelo título
app.get('/api/livros/titulo/:titulo', (req, res) => {
    const titulo = req.params.titulo.toLowerCase();
    const livro = livros.find(l => l.titulo.toLowerCase() === titulo);
    if (livro) {
        res.json(livro);
    } else {
        res.status(404).json({ mensagem: 'Livro não encontrado' });
    }
});

// Inicializando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});