import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrotxt',
  templateUrl: './registrotxt.component.html',
  styleUrls: ['./registrotxt.component.scss']
})
export class RegistrotxtComponent {
  
    hide = true;
  constructor(private router:Router){}

  ngOnInit(){

  }
  navegar(){
    this.router.navigate(['dashboard']);
  }
  navegar2(){
    this.router.navigate(['re-perfil']);
  }

}
