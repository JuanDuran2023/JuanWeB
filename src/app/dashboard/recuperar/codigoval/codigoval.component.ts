import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-codigoval',
  templateUrl: './codigoval.component.html',
  styleUrls: ['./codigoval.component.scss']
})
export class CodigovalComponent {
 constructor(private router:Router){}

  ngOnInit(){

  }
  navegar1(){
    this.router.navigate(['nuevaclave']);
  }
}

