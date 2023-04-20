import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent {
  constructor(private router:Router){}

  ngOnInit(){

  }
  navegar(){
    this.router.navigate(['test']);
  }
  navegar1(){
    this.router.navigate(['encuesta']);
  }
  navegar2(){
    this.router.navigate(['plantilla']);
  }

}
