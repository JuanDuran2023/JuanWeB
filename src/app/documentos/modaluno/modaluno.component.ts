import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modaluno',
  templateUrl: './modaluno.component.html',
  styleUrls: ['./modaluno.component.scss']
})
export class ModalunoComponent {
  constructor(private router:Router){}



  ngOnInit(){

  }
  navegar(){
    this.router.navigate(['']);
  }
 closeModal(): void{
    
 }


}
