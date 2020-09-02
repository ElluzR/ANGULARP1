import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eu',
  templateUrl: './eu.component.html',
  styleUrls: ['./eu.component.css']
})
export class EuComponent implements OnInit {


  nome: string = 'Elluz Carolina Rodriguez Vivas';
  idade: number = 39;
  gosto: string = 'A musica, cantar, da natureza, caminhar, escrever, do chocolate entre outras coisas.';
  ciudade: string = 'Maracaibo, Venezuela';
  moro: string = 'Realengo, Rio de Janeiro';
  foto: string = '../assets/Elluz.jpeg';

    getNome() {
      return this.nome;
    }

    getIdade() {
      return this.idade;
    }

    getGosto() {
      return this.gosto;
    }

    getCiudade() {
      return this.ciudade;
    }

    getMoro() {
      return this.moro;
    }

    getFoto() {
      return this.foto;
    }

  constructor() { }

  ngOnInit(): void {
  }

}
