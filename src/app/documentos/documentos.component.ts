import { ModaldosComponent } from './modaldos/modaldos.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalunoComponent } from './modaluno/modaluno.component';


@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.scss']
})
export class DocumentosComponent  {

  
  constructor(private dialogoref: MatDialog){}

  openDialog(){
    this.dialogoref.open(ModalunoComponent);
  }
  openDialogdos(){
    this.dialogoref.open(ModaldosComponent);
  }
  
  

}
