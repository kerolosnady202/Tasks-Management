import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-comfirmation',
  templateUrl: './comfirmation.component.html',
  styleUrls: ['./comfirmation.component.scss']
})
export class ComfirmationComponent {
  constructor(
    private _dialog:MatDialog,
    private _dialogRef:MatDialogRef < ComfirmationComponent>,
  ){}
  confirm(){
   this._dialog.closeAll()
  }
  close(){
    this._dialogRef.close()
  }
}
