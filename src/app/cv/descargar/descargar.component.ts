import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-descargar',
  templateUrl: './descargar.component.html',
  styleUrls: ['./descargar.component.scss']
})
export class DescargarComponent {
  constructor(private router:Router){}

  ngOnInit(){

  }
  navegar(){
    this.router.navigate(['plantilla']);
  }
  navegar1(){
    this.router.navigate(['documentos']);
  }

}
