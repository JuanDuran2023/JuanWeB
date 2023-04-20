import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevaclave',
  templateUrl: './nuevaclave.component.html',
  styleUrls: ['./nuevaclave.component.scss']
})
export class NuevaclaveComponent {
  constructor(private router:Router){}

  ngOnInit(){

  }
  navegar(){
    this.router.navigate(['re-perfil']);
  }

}

