import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registrovoz',
  templateUrl: './registrovoz.component.html',
  styleUrls: ['./registrovoz.component.scss']
})
export class RegistrovozComponent {
  constructor(private router:Router){}

  ngOnInit(){

  }
  navegar1(){
    this.router.navigate(['dashboard']);
  }
  navegar2(){
    this.router.navigate(['crearvoz']);
  }
}
