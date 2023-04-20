import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.scss']
})
export class RecuperarComponent {
 
constructor(private router:Router){}

  ngOnInit(){

  }
  navegar1(){
    this.router.navigate(['dashboard']);
  }
  navegar2(){
    this.router.navigate(['codigoval']);
  }

}
