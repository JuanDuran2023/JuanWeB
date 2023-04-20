import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rechazado',
  templateUrl: './rechazado.component.html',
  styleUrls: ['./rechazado.component.scss']
})
export class RechazadoComponent {
  constructor(private router:Router){}

  ngOnInit(){

  }
  navegar(){
    this.router.navigate(['notificaciones']);
  }
  navegar1(){
    this.router.navigate(['rechazado']);
  }

}
