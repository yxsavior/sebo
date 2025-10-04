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
    favorito: false,
    preco: 'R$ 35,00',
    imagem: 'as-ondas.png'
  },
    {
    titulo: 'O Deserto dos Tartáros',
    autoria: 'Dino Buzzati',
    genero: {
      id: 'romance',
      value: 'Romance',
      livros: []
    },
    favorito: false,
    preco: 'R$ 35,00',
    imagem: 'deserto-dos-tartaros.png'
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
    favorito: false,
    preco: 'R$ 35,00',
    imagem: 'alice.png'
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
    favorito: false,
    preco: 'R$ 35,00',
    imagem: 'nao-sobrou-nenhum.png'
  },


]

