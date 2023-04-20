import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent  {
  value='Clear me';
  
  constructor(private router:Router){}

  ngOnInit(){

  }
  navegar(){
    this.router.navigate(['buscador']);
  }
    
  
}
