import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id : number = 1;
  filme : string = 'Velozes e Furiosos 9';
  data : string = '25/06/2021';
  imagem : string = '../../../assets/img/velozes-e-furiosos-9.jpeg';
  desc : string = 'Dominic Toretto e Letty vivem uma vida pacata ao lado do filho. Mas eles logo são ameaçados pelo passado de Dom: seu irmão ...';
  preco_anterior : number = 59.99;
  preco : number = 39.99;

  id2 : number = 1;
  filme2 : string = 'Space Jam: Um Novo Legado';
  data2 : string = '15/07/2021';
  imagem2 : string = '../../../assets/img/space-jam.jpg';
  desc2 : string = 'O superastro do basquete LeBron James se junta à gangue Looney Tunes para derrotar o Goon Squad e salvar seu filho.';
  preco_anterior2 : number = 69.99;
  preco2 : number = 49.99;

  constructor() { }

  ngOnInit(): void {
  }

}
