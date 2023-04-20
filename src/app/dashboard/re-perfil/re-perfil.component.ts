import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalunoComponent } from 'src/app/documentos/modaluno/modaluno.component';
import { Router } from '@angular/router';
import { CVComponent } from 'src/app/cv/cv.component';


@Component({
  selector: 'app-re-perfil',
  templateUrl: './re-perfil.component.html',
  styleUrls: ['./re-perfil.component.scss']
})
export class RePerfilComponent {
  constructor(private dialogoref: MatDialog,private router:Router){}

  openDialog(){
    this.dialogoref.open(ModalunoComponent);
  }
  navegar(){
    this.router.navigate(['curriculum'])
  }

  

  

}
