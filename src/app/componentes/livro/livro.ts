export interface Livro {
  titulo: string;
  autoria: string;
  imagem: string;
  reservado: boolean;
  genero: GeneroLiterario;
  preco: string;
  condicao: string;
  generoAutoria: string;
  editora: string;
}

export interface GeneroLiterario {
  id: string;
  value: string;
  livros: Livro[]
}