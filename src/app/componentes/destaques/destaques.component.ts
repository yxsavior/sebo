import { Component } from '@angular/core';
import { Livro } from '../livro/livro';
import { CommonModule } from '@angular/common';
import { livros } from '../../mock-livros';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';


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
  selector: 'app-destaques',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './destaques.component.html',
  styleUrls: ['./destaques.component.css']
})

export class DestaquesComponent {
  livros: Livro[] = livros;  // lista original
  livrosFiltrados: Livro[] = livros;  // lista que será exibida, inicialmente igual a lista completa

  filtroAtivo: string = '*';  // Começa com "Todos"

  // filtrar(categoria: string, event: Event) {
  //   event.preventDefault();
  //   this.filtroAtivo = categoria;

  //   if (categoria === '*') {
  //     this.livrosFiltrados = this.livros;
  //   } else {
  //     this.livrosFiltrados = this.livros.filter(livro => livro.genero.id === categoria);
  //   }
  // }

    filtrar(categoria: string, event: Event) {
  event.preventDefault();
  this.filtroAtivo = categoria;

  // Filtra apenas os livros com novidade: true
  if (categoria === '*') {
    // Mostrar todos os livros com novidade: true
    this.livrosFiltrados = this.livros.filter(livro => livro.novidade === true);
  } else if (categoria === 'novidade') {
    // Mostrar todos os livros com novidade: true (mesmo comportamento de "*")
    this.livrosFiltrados = this.livros.filter(livro => livro.novidade === true);
  } else {
    // Filtrar por gênero, mas apenas para os livros com novidade: true
    this.livrosFiltrados = this.livros.filter(
      livro => livro.novidade === true && livro.genero.id === categoria
    );
  }
}

  alternarReserva(livro: Livro) {
    livro.reservado = !livro.reservado;
  }

  livroSelecionado: Livro | null = null;
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

  // Inicializa a lista de livros filtrados com apenas os livros "novidade: true"
  this.livrosFiltrados = this.livros.filter(livro => livro.novidade === true);
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
      this.livrosFiltrados = this.livrosFiltrados.filter(l => l !== this.livroSelecionado);

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




}

