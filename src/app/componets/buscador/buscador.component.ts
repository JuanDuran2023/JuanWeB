import { Component } from '@angular/core';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent {

  constructor(private router:Router){}

  ngOnInit(){

  }
  navegar(){
    this.router.navigate(['buscador']);
  }
  navegar2(){
    this.router.navigate(['trabajo']);
  }
}
