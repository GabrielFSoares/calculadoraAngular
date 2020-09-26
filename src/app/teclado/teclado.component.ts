import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teclado',
  templateUrl: './teclado.component.html',
  styleUrls: ['./teclado.component.css']
})
export class TecladoComponent implements OnInit {

  public resultado:string = '';
  public digitoF:string = '';
  public separarRes:string[];
  public ultimoNum:string = '';

  constructor() { }

  ngOnInit() {
  }

  clicar(tipo:string, valor:string) {
    this.digitoF = this.resultado[this.resultado.length - 1];

    if (tipo === 'valor') {
      this.resultado += valor;
    }

    if (tipo === 'acao' && this.resultado !== '') {
      if (valor === '.') {
        this.separarRes = this.resultado.split(/[-*+/]/);
        this.ultimoNum = this.separarRes[this.separarRes.length - 1];
      }

      if (!(this.digitoF === '+' || this.digitoF === '-' || this.digitoF === '/' || this.digitoF === '*' || this.digitoF === '.') && this.ultimoNum.indexOf('.') === -1) {
        this.resultado += valor;
      }
    }
  }

  calcular() {
    this.resultado = eval(this.resultado);
  }

  limpar(){
    this.resultado = '';
  }
}
