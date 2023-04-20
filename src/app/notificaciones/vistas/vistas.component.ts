import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vistas',
  templateUrl: './vistas.component.html',
  styleUrls: ['./vistas.component.scss']
})
export class VistasComponent {
  constructor(private router:Router){}

  ngOnInit(){

  }
  navegar(){
    this.router.navigate(['notificaciones']);
  }
  navegar1(){
    this.router.navigate(['vistas']);
  }
}
