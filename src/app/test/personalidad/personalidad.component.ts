import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personalidad',
  templateUrl: './personalidad.component.html',
  styleUrls: ['./personalidad.component.scss']
})
export class PersonalidadComponent {
  constructor(private router:Router){}

  ngOnInit(){

  }
  navegar(){
    this.router.navigate(['test']);
  }
  navegar1(){
    this.router.navigate(['resultados']);
  }


}
