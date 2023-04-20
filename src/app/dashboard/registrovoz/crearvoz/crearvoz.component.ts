import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-crearvoz',
  templateUrl: './crearvoz.component.html',
  styleUrls: ['./crearvoz.component.scss']
})
export class CrearvozComponent {
  hide = true;
  constructor(private router:Router){}

  ngOnInit(){

  }
  navegar1(){
    this.router.navigate(['dashboard']);
  }
  navegar2(){
    this.router.navigate(['re-perfil']);
  }

}
