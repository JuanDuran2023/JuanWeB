import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proceso',
  templateUrl: './proceso.component.html',
  styleUrls: ['./proceso.component.scss']
})
export class ProcesoComponent {
  constructor(private router:Router){}

  ngOnInit(){

  }
  navegar(){
    this.router.navigate(['notificaciones']);
  }
  navegar1(){
    this.router.navigate(['proceso']);
  }

}
