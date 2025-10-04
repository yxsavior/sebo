export interface Livro {
  titulo: string;
  autoria: string;
  imagem: string;
  reservado: boolean;
  genero: GeneroLiterario;
  preco: string;
}

export interface GeneroLiterario {
  id: string;
  value: string;
  livros: Livro[]
}