import { Livro } from "./componentes/livro/livro";

export const livros: Livro[] = [
  //=======================================================//
  //Literatura e Ficção
  {
    titulo: 'A Redoma de Vidro',
    autoria: 'Sylvia Plath',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: false,
    preco: 'R$ 35,00',
    imagem: 'redoma.jpg',
    generoAutoria: 'feminino',
    condicao: 'perfeito',
    editora: 'Biblioteca Azul',
    novidade: true
  },
  {
    titulo: 'Um Teto Todo Seu',
    autoria: ' Virginia Woolf',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 10,00',
    imagem: 'teto.jpg',
    generoAutoria: 'feminino',
    condicao: 'perfeito',
    editora: 'Tordesilhas',
    novidade: false
  },
  {
    titulo: 'Doutor Fausto',
    autoria: 'Thomas Mann',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 50,00',
    imagem: 'doutor.jpg',
    generoAutoria: 'masculino',
    condicao: 'novo',
    editora: 'Companhia das Letras',
    novidade: false
  },
  {
    titulo: 'Grande sertão: veredas',
    autoria: 'João Guimarães Rosa',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 50,00',
    imagem: 'sertao.jpg',
    generoAutoria: 'masculino',
    condicao: 'novo',
    editora: 'Companhia das Letras',
    novidade: false
  },
  {
    titulo: 'Nove histórias',
    autoria: 'J.D. Salinger',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 50,00',
    imagem: 'nove.jpg',
    generoAutoria: 'masculino',
    condicao: 'novo',
    editora: 'Todavia',
    novidade: false
  },
  {
    titulo: 'Franny & Zooey',
    autoria: 'J.D. Salinger',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 50,00',
    imagem: 'franny.jpg',
    generoAutoria: 'masculino',
    condicao: 'novo',
    editora: 'Todavia',
    novidade: false
  },
  {
    titulo: 'O apanhador no campo de centeio',
    autoria: 'J.D. Salinger',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 50,00',
    imagem: 'apanhador.jpg',
    generoAutoria: 'masculino',
    condicao: 'novo',
    editora: 'Todavia',
    novidade: false
  },
  {
    titulo: 'O corcunda de Notre Dame',
    autoria: 'Victor Hugo',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 50,00',
    imagem: 'corcunda.jpg',
    generoAutoria: 'masculino',
    condicao: 'bom',
    editora: 'Zahar',
    novidade: true
  },
  {
    titulo: 'O Jardim Secreto',
    autoria: 'Frances Hodgson Burnett',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 50,00',
    imagem: 'jardim.jpg',
    generoAutoria: 'feminino',
    condicao: 'bom',
    editora: 'Zahar',
    novidade: false
  },
  {
    titulo: 'O conde de Monte Cristo',
    autoria: 'Alexandre Dumas',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 40,00',
    imagem: 'conde.jpg',
    generoAutoria: 'masculino',
    condicao: 'bom',
    editora: 'Zahar',
    novidade: false
  },
  {
    titulo: 'Peter Pan',
    autoria: 'J.M. Barrie',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 40,00',
    imagem: 'peter.jpg',
    generoAutoria: 'masculino',
    condicao: 'bom',
    editora: 'Zahar',
    novidade: false
  },
  {
    titulo: 'A máquina do tempo',
    autoria: 'H.G. Wells',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 25,00',
    imagem: 'maquina.jpg',
    generoAutoria: 'masculino',
    condicao: 'novo',
    editora: 'Zahar',
    novidade: false
  },
  {
    titulo: 'O Fantasma da Ópera',
    autoria: 'Gaston Leroux',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 25,00',
    imagem: 'fantasma.jpg',
    generoAutoria: 'masculino',
    condicao: 'novo',
    editora: 'Zahar',
    novidade: false
  },
  {
    titulo: 'O morro dos ventos uivantes',
    autoria: 'Emily Brontë',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 50,00',
    imagem: 'morro.jpg',
    generoAutoria: 'feminino',
    condicao: 'perfeito',
    editora: 'Zahar',
    novidade: false
  },
  {
    titulo: 'Jane Eyre',
    autoria: 'Emily Brontë',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 50,00',
    imagem: 'jane.jpg',
    generoAutoria: 'feminino',
    condicao: 'perfeito',
    editora: 'Zahar',
    novidade: false
  },
  {
    titulo: 'Lolita',
    autoria: 'Vladimir Nabokov',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 30,00',
    imagem: 'lolita.jpg',
    generoAutoria: 'masculino',
    condicao: 'bom',
    editora: 'Alfaguara',
    novidade: false
  },
  {
    titulo: 'Demian',
    autoria: 'Hermann Hesse',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 10,00',
    imagem: 'demian.jpg',
    generoAutoria: 'masculino',
    condicao: 'bom',
    editora: 'Record',
    novidade: false
  },
  {
    titulo: 'Júlio César',
    autoria: 'William Shakespeare',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 10,00',
    imagem: 'julio.jpg',
    generoAutoria: 'masculino',
    condicao: 'bom',
    editora: 'Penguin',
    novidade: false
  },
  {
    titulo: 'Romeu e Julieta',
    autoria: 'William Shakespeare',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 10,00',
    imagem: 'romeu.jpg',
    generoAutoria: 'masculino',
    condicao: 'bom',
    editora: 'Penguin',
    novidade: false
  },
  {
    titulo: 'Otelo',
    autoria: 'William Shakespeare',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 10,00',
    imagem: 'otelo.jpg',
    generoAutoria: 'masculino',
    condicao: 'bom',
    editora: 'Penguin',
    novidade: false
  },
  {
    titulo: 'Hamlet',
    autoria: 'William Shakespeare',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 10,00',
    imagem: 'hamlet.jpg',
    generoAutoria: 'masculino',
    condicao: 'bom',
    editora: 'Penguin',
    novidade: false
  },
  {
    titulo: 'Rei Lear',
    autoria: 'William Shakespeare',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 10,00',
    imagem: 'lear.jpg',
    generoAutoria: 'masculino',
    condicao: 'bom',
    editora: 'Penguin',
    novidade: false
  },
  {
    titulo: 'Macbeth',
    autoria: 'William Shakespeare',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 10,00',
    imagem: 'macbeth.jpg',
    generoAutoria: 'masculino',
    condicao: 'bom',
    editora: 'Penguin',
    novidade: false
  },
  {
    titulo: 'A Tempestade',
    autoria: 'William Shakespeare',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 10,00',
    imagem: 'tempestade.jpg',
    generoAutoria: 'masculino',
    condicao: 'bom',
    editora: 'Penguin',
    novidade: false
  },
  {
    titulo: 'Dublinenses',
    autoria: 'James Joyce ',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 10,00',
    imagem: 'dublinenses.jpg',
    generoAutoria: 'masculino',
    condicao: 'bom',
    editora: 'Penguin',
    novidade: false
  },

  //Clarice Lispector
  {
    titulo: 'A paixão segundo G. H.',
    autoria: 'Clarice Lispector',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 10,00',
    imagem: 'paixao.jpg',
    generoAutoria: 'feminino',
    condicao: 'perfeito',
    editora: 'Rocco',
    novidade: true
  },
  {
    titulo: 'Água Viva',
    autoria: 'Clarice Lispector',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 10,00',
    imagem: 'agua.jpg',
    generoAutoria: 'feminino',
    condicao: 'perfeito',
    editora: 'Rocco',
    novidade: false
  },

  {
    titulo: 'A Bela e a Fera',
    autoria: 'Clarice Lispector',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 10,00',
    imagem: 'bela.jpg',
    generoAutoria: 'feminino',
    condicao: 'perfeito',
    editora: 'Rocco',
    novidade: false
  },

  {
    titulo: 'A Hora da Estrela',
    autoria: 'Clarice Lispector',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 10,00',
    imagem: 'estrela.jpg',
    generoAutoria: 'feminino',
    condicao: 'perfeito',
    editora: 'Rocco',
    novidade: false
  },

  {
    titulo: 'Felicidade Clandestina',
    autoria: 'Clarice Lispector',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 10,00',
    imagem: 'felicidade.jpg',
    generoAutoria: 'feminino',
    condicao: 'perfeito',
    editora: 'Rocco',
    novidade: false
  },

  {
    titulo: 'A Maça no Escuro',
    autoria: 'Clarice Lispector',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 10,00',
    imagem: 'maca.jpg',
    generoAutoria: 'feminino',
    condicao: 'perfeito',
    editora: 'Rocco',
    novidade: false
  },
  {
    titulo: 'Pra não esquecer',
    autoria: 'Clarice Lispector',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: false,
    preco: 'R$ 10,00',
    imagem: 'esquecer.jpg',
    generoAutoria: 'feminino',
    condicao: 'perfeito',
    editora: 'Rocco',
    novidade: false
  },
  {
    titulo: 'Perto do Coração Selvagem',
    autoria: 'Clarice Lispector',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 10,00',
    imagem: 'perto.jpg',
    generoAutoria: 'feminino',
    condicao: 'perfeito',
    editora: 'Rocco',
    novidade: false
  },

  {
    titulo: 'Um Sopro de Vida',
    autoria: 'Clarice Lispector',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 10,00',
    imagem: 'sopro.jpg',
    generoAutoria: 'feminino',
    condicao: 'perfeito',
    editora: 'Rocco',
    novidade: false
  },

  // Dostoiévski
  {
    titulo: 'Crime e Castigo',
    autoria: 'Fiódor Dostoiévski',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 10,00',
    imagem: 'crime.jpg',
    generoAutoria: 'masculino',
    condicao: 'bom',
    editora: 'Editora 34',
    novidade: false
  },
  {
    titulo: 'Os Demônios',
    autoria: 'Fiódor Dostoiévski',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 10,00',
    imagem: 'demonios.jpg',
    generoAutoria: 'masculino',
    condicao: 'bom',
    editora: 'Editora 34',
    novidade: false
  },
  {
    titulo: 'O Duplo',
    autoria: 'Fiódor Dostoiévski',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 10,00',
    imagem: 'duplo.jpg',
    generoAutoria: 'masculino',
    condicao: 'bom',
    editora: 'Editora 34',
    novidade: false
  },
  {
    titulo: 'Escritos da Casa Morta',
    autoria: ' Fiódor Dostoiévski',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 10,00',
    imagem: 'escritos.jpg',
    generoAutoria: 'masculino',
    condicao: 'bom',
    editora: 'Editora 34',
    novidade: false
  },
  {
    titulo: 'O Eterno Marido',
    autoria: ' Fiódor Dostoiévski',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 10,00',
    imagem: 'eterno.jpg',
    generoAutoria: 'masculino',
    condicao: 'bom',
    editora: 'Editora 34',
    novidade: false
  },
  {
    titulo: 'Humilhados e Ofendidos',
    autoria: ' Fiódor Dostoiévski',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 10,00',
    imagem: 'humilhados.jpg',
    generoAutoria: 'masculino',
    condicao: 'bom',
    editora: 'Editora 34',
    novidade: false
  },
  {
    titulo: 'O Idiota',
    autoria: ' Fiódor Dostoiévski',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 10,00',
    imagem: 'idiota.jpg',
    generoAutoria: 'masculino',
    condicao: 'bom',
    editora: 'Editora 34',
    novidade: false
  },
  {
    titulo: 'Um Jogador',
    autoria: ' Fiódor Dostoiévski',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 10,00',
    imagem: 'jogador.jpg',
    generoAutoria: 'masculino',
    condicao: 'bom',
    editora: 'Editora 34',
    novidade: false
  },
  {
    titulo: 'Os Irmãos Karamázov',
    autoria: ' Fiódor Dostoiévski',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 10,00',
    imagem: 'karamazov.jpg',
    generoAutoria: 'masculino',
    condicao: 'bom',
    editora: 'Editora 34',
    novidade: false
  },
  {
    titulo: 'Memórias do Subsolo',
    autoria: ' Fiódor Dostoiévski',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 10,00',
    imagem: 'memorias.jpg',
    generoAutoria: 'masculino',
    condicao: 'bom',
    editora: 'Editora 34',
    novidade: false
  },
  {
    titulo: 'Noites Brancas',
    autoria: ' Fiódor Dostoiévski',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 10,00',
    imagem: 'noites.jpg',
    generoAutoria: 'masculino',
    condicao: 'bom',
    editora: 'Editora 34',
    novidade: false
  },
  {
    titulo: 'Um Pequeno Héroi',
    autoria: ' Fiódor Dostoiévski',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 10,00',
    imagem: 'pequeno.jpg',
    generoAutoria: 'masculino',
    condicao: 'bom',
    editora: 'Editora 34',
    novidade: false
  },
  {
    titulo: 'Gente Pobre',
    autoria: ' Fiódor Dostoiévski',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 10,00',
    imagem: 'pobre.jpg',
    generoAutoria: 'masculino',
    condicao: 'bom',
    editora: 'Editora 34',
    novidade: false
  },
  {
    titulo: 'A Senhoria',
    autoria: ' Fiódor Dostoiévski',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 10,00',
    imagem: 'senhoria.jpg',
    generoAutoria: 'masculino',
    condicao: 'bom',
    editora: 'Editora 34',
    novidade: false
  },
  {
    titulo: 'A outra volta do parafuso',
    autoria: 'Henry James',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 10,00',
    imagem: 'volta.jpg',
    generoAutoria: 'masculino',
    condicao: 'bom',
    editora: 'Penguin',
    novidade: false
  },
  {
    titulo: 'Madame Bovary',
    autoria: 'Gustave Flaubert',
    genero: {
      id: 'classico',
      value: 'Clássicos',
      livros: []
    },
    reservado: true,
    preco: 'R$ 10,00',
    imagem: 'bovary.jpg',
    generoAutoria: 'masculino',
    condicao: 'bom',
    editora: 'Penguin',
    novidade: false
  },
  //=======================================================//
  //Contemporâneo
  {
    titulo: 'Impostora: Yellowface',
    autoria: 'R.F. Kuang',
    genero: {
      id: 'contemporaneo',
      value: 'Contemporâneo',
      livros: []
    },
    reservado: false,
    preco: 'R$ 20,00',
    imagem: 'yellowface.jpg',
    generoAutoria: 'feminino',
    condicao: 'novo',
    editora: 'Intrínseca',
    novidade: false
  },
  {
    titulo: 'Pessoas Normais',
    autoria: 'Sally Rooney',
    genero: {
      id: 'contemporaneo',
      value: 'Contemporâneo',
      livros: []
    },
    reservado: false,
    preco: 'R$ 20,00',
    imagem: 'pessoas.jpg',
    generoAutoria: 'feminino',
    condicao: 'novo',
    editora: 'Companhia das Letras',
    novidade: false
  },
  {
    titulo: 'Conversas Entre Amigos',
    autoria: 'Sally Rooney',
    genero: {
      id: 'contemporaneo',
      value: 'Contemporâneo',
      livros: []
    },
    reservado: false,
    preco: 'R$ 20,00',
    imagem: 'conversas.jpg',
    generoAutoria: 'feminino',
    condicao: 'novo',
    editora: 'Companhia das Letras',
    novidade: true
  },
  {
    titulo: 'Cleopatra e Frankenstein',
    autoria: 'Coco Mellors',
    genero: {
      id: 'contemporaneo',
      value: 'Contemporâneo',
      livros: []
    },
    reservado: false,
    preco: 'R$ 20,00',
    imagem: 'cleo.jpg',
    generoAutoria: 'feminino',
    condicao: 'novo',
    editora: 'Astral Cultural',
    novidade: false
  },
  {
    titulo: 'Daisy Jones and The Six',
    autoria: 'Taylor Jenkins Reid',
    genero: {
      id: 'contemporaneo',
      value: 'Contemporâneo',
      livros: []
    },
    reservado: false,
    preco: 'R$ 20,00',
    imagem: 'daisy.jpg',
    generoAutoria: 'feminino',
    condicao: 'novo',
    editora: 'Paralela',
    novidade: false
  },
  {
    titulo: 'Tudo é Rio',
    autoria: 'Carla Madeira',
    genero: {
      id: 'contemporaneo',
      value: 'Contemporâneo',
      livros: []
    },
    reservado: false,
    preco: 'R$ 20,00',
    imagem: 'tudo.jpg',
    generoAutoria: 'feminino',
    condicao: 'novo',
    editora: 'Record',
    novidade: false
  },
  {
    titulo: 'Reparação',
    autoria: 'Ian McEwan',
    genero: {
      id: 'contemporaneo',
      value: 'Contemporâneo',
      livros: []
    },
    reservado: false,
    preco: 'R$ 20,00',
    imagem: 'reparacao.jpg',
    generoAutoria: 'masculino',
    condicao: 'novo',
    editora: 'Companhia das Letras',
    novidade: false
  },

  //=======================================================//
  //Ficção Científica
  {
    titulo: 'Kindred: Laços de Sangue',
    autoria: 'Octavia E. Butler',
    genero: {
      id: 'ficcao-cientifica',
      value: 'Ficção Científica',
      livros: []
    },
    reservado: true,
    preco: 'R$ 20,00',
    imagem: 'kindred.jpg',
    generoAutoria: 'feminino',
    condicao: 'bom estado',
    editora: 'Morro Branco',
    novidade: true
  },
  {
    titulo: 'Recursão',
    autoria: 'Blake Crouch',
    genero: {
      id: 'ficcao-cientifica',
      value: 'Ficção Científica',
      livros: []
    },
    reservado: true,
    preco: 'R$ 20,00',
    imagem: 'recursao.png',
    generoAutoria: 'feminino',
    condicao: 'novo',
    editora: 'Intrínseca',
    novidade: false
  },

  //=======================================================//
  //Fantasia
  {
    titulo: 'O Circo da Noite',
    autoria: 'Erin Morgenstern',
    genero: {
      id: 'fantasia',
      value: 'Fantasia',
      livros: []
    },
    reservado: false,
    preco: 'R$ 30,00',
    imagem: 'circo.jpg',
    generoAutoria: 'feminino',
    condicao: 'novo',
    editora: 'Morro Branco',
    novidade: true
  },
  {
    titulo: 'Piranesi',
    autoria: 'Susanna Clarke',
    genero: {
      id: 'fantasia',
      value: 'Fantasia',
      livros: []
    },
    reservado: false,
    preco: 'R$ 20,00',
    imagem: 'piranesi.jpg',
    generoAutoria: 'feminino',
    condicao: 'novo',
    editora: 'Morro Branco',
    novidade: false
  },
  {
    titulo: 'Beren e Lúthien',
    autoria: 'J.R.R. Tolkien',
    genero: {
      id: 'fantasia',
      value: 'Fantasia',
      livros: []
    },
    reservado: false,
    preco: 'R$ 20,00',
    imagem: 'beren.jpg',
    generoAutoria: 'masculino',
    condicao: 'novo',
    editora: 'HarperCollins',
    novidade: false
  },
  {
    titulo: 'Os filhos de Húrin',
    autoria: 'J.R.R. Tolkien',
    genero: {
      id: 'fantasia',
      value: 'Fantasia',
      livros: []
    },
    reservado: false,
    preco: 'R$ 20,00',
    imagem: 'hurin.jpg',
    generoAutoria: 'masculino',
    condicao: 'novo',
    editora: 'HarperCollins',
    novidade: false
  },

  {
    titulo: 'Árvore e folha',
    autoria: 'J.R.R. Tolkien',
    genero: {
      id: 'fantasia',
      value: 'Fantasia',
      livros: []
    },
    reservado: false,
    preco: 'R$ 20,00',
    imagem: 'arvore.jpg',
    generoAutoria: 'masculino',
    condicao: 'novo',
    editora: 'HarperCollins',
    novidade: false
  },

  //=======================================================//
  //Suspense
  {
    titulo: 'Jantar Secreto',
    autoria: 'Raphael Montes',
    genero: {
      id: 'suspense',
      value: 'Suspense',
      livros: []
    },
    reservado: false,
    preco: 'R$ 15,00',
    imagem: 'jantar.jpg',
    generoAutoria: 'masculino',
    condicao: 'novo',
    editora: 'Companhia das Letras',
    novidade: false
  },
  {
    titulo: 'A paciente silenciosa',
    autoria: 'Alex Michaelides',
    genero: {
      id: 'suspense',
      value: 'Suspense',
      livros: []
    },
    reservado: false,
    preco: 'R$ 15,00',
    imagem: 'paciente.jpg',
    generoAutoria: 'masculino',
    condicao: 'novo',
    editora: 'Record',
    novidade: false
  },
  {
    titulo: 'O massacre da família Hope',
    autoria: 'Riley Sager',
    genero: {
      id: 'suspense',
      value: 'Suspense',
      livros: []
    },
    reservado: false,
    preco: 'R$ 15,00',
    imagem: 'massacre.jpg',
    generoAutoria: 'masculino',
    condicao: 'novo',
    editora: 'Intrínseca',
    novidade: false
  },
  {
    titulo: 'Morte no Nilo',
    autoria: 'Agatha Christie',
    genero: {
      id: 'suspense',
      value: 'Suspense',
      livros: []
    },
    reservado: false,
    preco: 'R$ 15,00',
    imagem: 'nilo.jpg',
    generoAutoria: 'feminino',
    condicao: 'novo',
    editora: 'HarperCollins',
    novidade: false
  },
  {
    titulo: 'Um mistério no Caribe',
    autoria: 'Agatha Christie',
    genero: {
      id: 'suspense',
      value: 'Suspense',
      livros: []
    },
    reservado: false,
    preco: 'R$ 15,00',
    imagem: 'caribe.jpg',
    generoAutoria: 'feminino',
    condicao: 'novo',
    editora: 'HarperCollins',
    novidade: false
  },
  {
    titulo: 'O Colecionador',
    autoria: 'John Fowles',
    genero: {
      id: 'suspense',
      value: 'Suspense',
      livros: []
    },
    reservado: false,
    preco: 'R$ 15,00',
    imagem: 'colecionador.jpg',
    generoAutoria: 'masculino',
    condicao: 'novo',
    editora: 'Darkside',
    novidade: true
  },
  {
    titulo: 'Misery: Louca obsessão',
    autoria: 'Stephen King',
    genero: {
      id: 'suspense',
      value: 'Suspense',
      livros: []
    },
    reservado: true,
    preco: 'R$ 22,00',
    imagem: 'misery.jpg',
    generoAutoria: 'masculino',
    condicao: 'perfeito',
    editora: 'Suma',
    novidade: false
  },
  {
    titulo: 'Sob a redoma',
    autoria: 'Stephen King',
    genero: {
      id: 'suspense',
      value: 'Suspense',
      livros: []
    },
    reservado: true,
    preco: 'R$ 22,00',
    imagem: 'sob.jpg',
    generoAutoria: 'masculino',
    condicao: 'perfeito',
    editora: 'Suma',
    novidade: false
  },
  {
    titulo: 'A Empregada',
    autoria: 'Freida McFadden',
    genero: {
      id: 'suspense',
      value: 'Suspense',
      livros: []
    },
    reservado: false,
    preco: 'R$ 10,00',
    imagem: 'empregada.jpg',
    generoAutoria: 'feminino',
    condicao: 'novo',
    editora: 'Arqueiro',
    novidade: false
  },

  //=======================================================//
  //Terror
  {
    titulo: 'It: A coisa',
    autoria: 'Stephen King',
    genero: {
      id: 'terror',
      value: 'Terror',
      livros: []
    },
    reservado: true,
    preco: 'R$ 40,00',
    imagem: 'it.jpg',
    generoAutoria: 'masculino',
    condicao: 'novo',
    editora: 'Suma',
    novidade: false
  },
  {
    titulo: 'A hora do lobisomem',
    autoria: 'Stephen King',
    genero: {
      id: 'terror',
      value: 'Terror',
      livros: []
    },
    reservado: true,
    preco: 'R$ 40,00',
    imagem: 'lobisomem.jpg',
    generoAutoria: 'masculino',
    condicao: 'novo',
    editora: 'Suma',
    novidade: true
  },
  {
    titulo: 'A dança da morte',
    autoria: 'Stephen King',
    genero: {
      id: 'terror',
      value: 'Terror',
      livros: []
    },
    reservado: true,
    preco: 'R$ 40,00',
    imagem: 'danca.jpg',
    generoAutoria: 'masculino',
    condicao: 'novo',
    editora: 'Suma',
    novidade: false
  },
  {
    titulo: 'Carrie',
    autoria: 'Stephen King',
    genero: {
      id: 'terror',
      value: 'Terror',
      livros: []
    },
    reservado: true,
    preco: 'R$ 40,00',
    imagem: 'carrie.jpg',
    generoAutoria: 'masculino',
    condicao: 'novo',
    editora: 'Suma',
    novidade: false
  },
  {
    titulo: 'Salem',
    autoria: 'Stephen King',
    genero: {
      id: 'terror',
      value: 'Terror',
      livros: []
    },
    reservado: true,
    preco: 'R$ 40,00',
    imagem: 'salem.jpg',
    generoAutoria: 'masculino',
    condicao: 'novo',
    editora: 'Suma',
    novidade: false
  },
  {
    titulo: 'O iluminado',
    autoria: 'Stephen King',
    genero: {
      id: 'terror',
      value: 'Terror',
      livros: []
    },
    reservado: true,
    preco: 'R$ 40,00',
    imagem: 'iluminado.jpg',
    generoAutoria: 'masculino',
    condicao: 'novo',
    editora: 'Suma',
    novidade: false
  }
]

