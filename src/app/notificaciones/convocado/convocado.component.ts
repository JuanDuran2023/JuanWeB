import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-convocado',
  templateUrl: './convocado.component.html',
  styleUrls: ['./convocado.component.scss']
})
export class ConvocadoComponent {
  constructor(private router:Router){}

  ngOnInit(){

  }
  navegar(){
    this.router.navigate(['notificaciones']);
  }
  navegar1(){
    this.router.navigate(['convocado']);
  }

}
