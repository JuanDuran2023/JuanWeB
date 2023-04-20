import { Component } from '@angular/core';
import { Router } from '@angular/router';







@Component({
  
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {

  constructor(private router:Router){}

  ngOnInit(){

  }
  navegar1(){
    this.router.navigate(['registrotxt']);
  }
  navegar2(){
    this.router.navigate(['registrovoz']);
  }
  navegar3(){
    this.router.navigate(['recuperar']);
  }
  navegar4(){
    this.router.navigate(['re-perfil']);
  }
  
}
