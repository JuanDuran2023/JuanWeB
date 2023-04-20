import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.scss']
})
export class EncuestaComponent {
  constructor(private router:Router){}

  ngOnInit(){

  }
  navegar(){
    this.router.navigate(['encuesta']);
  }
  navegar1(){
    this.router.navigate(['curriculum']);
  }
  navegar2(){
    this.router.navigate(['experiencia']);
  }

}
