import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CabecalhoComponent } from '../cabecalho/cabecalho.component';
import { RodapeComponent } from "../rodape/rodape.component";
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { livros } from '../../mock-livros';
import { Livro } from '../livro/livro';



//Funções
function validarDataNaoFimDeSemana(control: AbstractControl) {
  if (!control.value) return null;

  // Parse manual da data (evita conversão para UTC)
  const partes = control.value.split('-'); // yyyy-mm-dd
  const ano = parseInt(partes[0], 10);
  const mes = parseInt(partes[1], 10) - 1; // mês começa do zero
  const dia = parseInt(partes[2], 10);

  const data = new Date(ano, mes, dia); // <-- Data local

  const diaSemana = data.getDay(); // 0 = domingo, 6 = sábado

  if (diaSemana === 0 || diaSemana === 6) {
    return { fimDeSemana: true };
  }

  return null;
}


function validarHorario(control: AbstractControl) {
  if (!control.value) return null;

  const [hora, minuto] = control.value.split(':').map(Number);
  const minutosTotais = hora * 60 + minuto;

  const inicio = 18 * 60 + 30; // 18:30 = 1110
  const fim = 22 * 60;         // 22:00 = 1320

  if (minutosTotais < inicio || minutosTotais > fim) {
    return { horarioInvalido: true };
  }

  return null;
}

function validarTelefoneCompleto(control: AbstractControl) {
  const valor = control.value?.replace(/\D/g, '') || ''; // remove não-dígitos

  // Se o campo estiver vazio, não deve disparar erro
  if (!valor) {
    return null;
  }

  // Se o valor tiver diferente de 11 caracteres, é um erro
  if (valor.length !== 11) {
    return { telefoneInvalido: true };
  }

  return null;
}



@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, RouterModule, CabecalhoComponent, RodapeComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent implements OnInit {
  livros: Livro[] = livros;  // lista original
  livrosFiltrados: Livro[] = livros;  // lista que será exibida
  filtroAtivo: string = '*';  // Filtro de categoria ativo
  itensPorPagina: number = 8;  // Quantidade de itens por página
  paginaAtual: number = 1;  // Página atual
  filtroOrdenacao: string = 'Todos'; // Defina o valor inicial conforme sua necessidade


    // Função para ordenar os livros
  ordenarLivros(filtro: string) {
    switch (filtro) {
      case 'disponiveis':
      this.livrosFiltrados = this.livros.filter(livro => !livro.reservado);
      break;

      case 'reservados':
      this.livrosFiltrados = this.livros.filter(livro => livro.reservado);
      break;

      case 'precoAsc':
        this.livrosFiltrados = [...this.livros].sort((a, b) => {
          const precoA = parseFloat(a.preco.replace('R$', '').replace(',', '.').trim());
          const precoB = parseFloat(b.preco.replace('R$', '').replace(',', '.').trim());
          return precoA - precoB;
        });
        break;

      case 'precoDesc':
        this.livrosFiltrados = [...this.livros].sort((a, b) => {
          const precoA = parseFloat(a.preco.replace('R$', '').replace(',', '.').trim());
          const precoB = parseFloat(b.preco.replace('R$', '').replace(',', '.').trim());
          return precoB - precoA;
        });
        break;

      default:
        this.livrosFiltrados = this.livros;  // Se "Todos" for selecionado, mostra todos
    }

    // Resetar para a primeira página após aplicar o filtro
    this.paginaAtual = 1;
  }

  // Variáveis de controle de paginação
  get totalDePaginas(): number {
    return Math.ceil(this.livrosFiltrados.length / this.itensPorPagina);
  }

  get livrosParaExibir(): Livro[] {
    const inicio = (this.paginaAtual - 1) * this.itensPorPagina;
    return this.livrosFiltrados.slice(inicio, inicio + this.itensPorPagina);
  }

  // Filtro de categoria
filtrar(filtro: string, tipo: string, event: Event) {
  event.preventDefault();

  // Define qual filtro está ativo (categoria, preço, editora, condição)
  switch (tipo) {
    case 'categoria':
      this.filtroAtivo = filtro;
      this.livrosFiltrados = filtro === '*' ? this.livros : this.livros.filter(livro => livro.genero.id === filtro);
      break;
    case 'preco':
      const faixa = this.filtrosPreco.find(f => f.faixa === filtro);
      if (faixa) {
        const [min, max] = faixa.faixa.split('-').map(f => parseFloat(f.replace('R$', '').trim()));
        this.livrosFiltrados = this.livros.filter(livro => {
          const valor = parseFloat(livro.preco.replace('R$', '').replace(',', '.').trim());
          return valor >= min && valor <= max;
        });
      }
      break;
    case 'editora':
      this.livrosFiltrados = this.livros.filter(livro => livro.editora === filtro);
      break;
    case 'condicao':
      this.livrosFiltrados = this.livros.filter(livro => livro.condicao === filtro);
      break;
    default:
      this.livrosFiltrados = this.livros;
  }

  // Resetar para a primeira página após aplicar filtro
  this.paginaAtual = 1;
}


  // Função para alternar entre páginas
  alterarPagina(pagina: number) {
    if (pagina < 1 || pagina > this.totalDePaginas) return;
    this.paginaAtual = pagina;
  }

  // Função para exibir os livros por página
  livrosParaExibirNaPagina(pagina: number): Livro[] {
    const inicio = (pagina - 1) * this.itensPorPagina;
    return this.livrosFiltrados.slice(inicio, inicio + this.itensPorPagina);
  }

  // Funções de manipulação do formulário e reservas (não alteradas)
  livroSelecionado: Livro | null = null;



 alternarReserva(livro: Livro) {
    livro.reservado = !livro.reservado;
  }


  mostrarFormulario: boolean = false;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/)]],
      whatsapp: ['', [Validators.required, validarTelefoneCompleto]],
      livro: [{ value: '', disabled: true }],
      entrega: ['', Validators.required],
      data: ['', [Validators.required, validarDataNaoFimDeSemana]],
      horario: ['', [Validators.required, validarHorario]],
      aceite: [false, Validators.requiredTrue]
    });

  // Inicializa a lista de livros
  this.livrosFiltrados = this.livros;
  }

  abrirFormularioReserva(livro: Livro) {
    console.log('Abrindo modal para livro:', livro.titulo);
    this.livroSelecionado = livro;
    // this.mostrarFormulario = true;
    //     this.form.patchValue({
    //   livro: livro.titulo
    // });

    // Reseta o formulário e seta o título do livro selecionado
    this.form.reset({
      livro: livro.titulo,
      aceite: false // garante que o checkbox fique desmarcado
    });

    this.mostrarFormulario = true;
  }

  fecharFormulario() {
    this.mostrarFormulario = false;
    this.livroSelecionado = null;
  }

  reservarLivro(dados: any) {
    if (this.livroSelecionado) {
      this.livroSelecionado.reservado = true;

      // Remove da lista exibida
      // this.livrosFiltrados = this.livrosFiltrados.filter(l => l !== this.livroSelecionado);

      this.fecharFormulario();

      console.log('Reserva feita com sucesso!', dados);
    }
  }

  formatarTelefone() {
    const controle = this.form.get('whatsapp');
    if (!controle) return;

    let valor = controle.value.replace(/\D/g, ''); // remove tudo que não for número

    if (valor.length > 11) valor = valor.slice(0, 11); // limita 11 dígitos

    // aplica máscara (00)00000-0000
    if (valor.length > 6) {
      valor = `(${valor.slice(0, 2)})${valor.slice(2, 7)}-${valor.slice(7)}`;
    } else if (valor.length > 2) {
      valor = `(${valor.slice(0, 2)})${valor.slice(2)}`;
    } else if (valor.length > 0) {
      valor = `(${valor}`;
    }

    controle.setValue(valor, { emitEvent: false }); // atualiza sem disparar outro input
  }


  // Filtros dinâmicos
  filtrosPreco: { faixa: string, quantidade: number }[] = [];
  filtrosEditora: { editora: string, quantidade: number }[] = [];
  filtrosCondicao: { condicao: string, quantidade: number }[] = [];

  ngOnInit() {
    this.gerarFiltrosDinamicos();
  }

  gerarFiltrosDinamicos() {
    const precos = [
      // { faixa: 'Menos de R$20', min: 0, max: 19 },
      { faixa: 'R$20 - R$30', min: 20, max: 30 },
      { faixa: 'R$30 - R$40', min: 30, max: 40 },
      { faixa: 'R$40 - R$50', min: 40, max: 50 }
    ];

    this.filtrosPreco = precos.map(faixa => {
      const quantidade = this.livros.filter(livro => {
        const valor = parseFloat(livro.preco.replace('R$', '').replace(',', '.').trim());
        return valor >= faixa.min && valor <= faixa.max;
      }).length;
      return { faixa: faixa.faixa, quantidade };
    });

    // Editoras
    const editorasMap = new Map<string, number>();
    this.livros.forEach(livro => {
      const editora = livro.editora.trim();
      editorasMap.set(editora, (editorasMap.get(editora) || 0) + 1);
    });
    this.filtrosEditora = Array.from(editorasMap.entries()).map(([editora, quantidade]) => ({
      editora, quantidade
    })).sort((a, b) => a.editora.localeCompare(b.editora));;

    // Condições
    const condicoesMap = new Map<string, number>();
    this.livros.forEach(livro => {
      const condicao = livro.condicao.trim().toLowerCase();
      condicoesMap.set(condicao, (condicoesMap.get(condicao) || 0) + 1);
    });
    // Convertendo o Map para um array e ordenando por condição
    this.filtrosCondicao = Array.from(condicoesMap.entries())
      .map(([condicao, quantidade]) => ({ condicao, quantidade }))
      .sort((a, b) => a.condicao.localeCompare(b.condicao)); // Ordenação alfabética
  }
}

