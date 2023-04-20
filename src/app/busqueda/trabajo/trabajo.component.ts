import { Component } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.component.html',
  styleUrls: ['./trabajo.component.scss']
})
export class TrabajoComponent {
  constructor(private router:Router){}

  ngOnInit(){

  }
  navegar(){
    this.router.navigate(['buscador']);
  }
  navegar1(){
    this.router.navigate(['buscador']);
  }
  navegar2(){
    this.router.navigate(['']);
  }

}
