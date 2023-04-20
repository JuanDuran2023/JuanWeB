import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent {
  constructor(private router:Router){}

  ngOnInit(){

  }
  navegar(){
    this.router.navigate(['curriculum']);
  }
  navegar1(){
    this.router.navigate(['test']);
  }


}
