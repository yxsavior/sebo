import { Livro } from "./componentes/livro/livro";

export const livros: Livro[] = [
  {
    titulo: 'As ondas',
    autoria: 'Virginia Woolf',
    genero: {
      id: 'romance',
      value: 'Romance',
      livros: []
    },
    reservado: false,
    preco: 'R$ 35,00',
    imagem: 'as-ondas.png',
    generoAutoria: 'feminino',
    condicao: 'novo',
    editora: 'Record'
  },
    {
    titulo: 'O Deserto dos Tartáros',
    autoria: 'Dino Buzzati',
    genero: {
      id: 'romance',
      value: 'Romance',
      livros: []
    },
    reservado: false,
    preco: 'R$ 25,00',
    imagem: 'deserto-dos-tartaros.png',
    generoAutoria: 'masculino',
    condicao: 'novo',
    editora: 'Record'
  },

  //Fantasia
      {
    titulo: 'Alice no País das Maravilhas',
    autoria: 'Lewis Carroll',
    genero: {
      id: 'fantasia',
      value: 'Fantasia',
      livros: []
    },
    reservado: false,
    preco: 'R$ 25,00',
    imagem: 'alice.png',
    generoAutoria: 'masculino',
    condicao: 'novo',
    editora: 'Record'
  },

  //Mistério
      {
    titulo: 'E Não Sobrou Nenhum',
    autoria: 'Agatha Christie',
    genero: {
      id: 'misterio',
      value: 'Misterio',
      livros: []
    },
    reservado: false,
    preco: 'R$ 15,00',
    imagem: 'nao-sobrou-nenhum.png',
    generoAutoria: 'feminino',
    condicao: 'novo',
    editora: 'Record'
  },


]

