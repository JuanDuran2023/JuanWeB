import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.scss']
})
export class PlantillaComponent {

  constructor(private router:Router){}

  ngOnInit(){

  }
  navegar(){
    this.router.navigate(['encuesta']);
  }
  navegar1(){
    this.router.navigate(['experiencia']);
  }
  navegar2(){
    this.router.navigate(['descargar']);
  }

}
