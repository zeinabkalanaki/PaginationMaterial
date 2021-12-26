import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { bookDTO } from 'src/app/bookDTO';

@Component({
  selector: 'app-crud-dialog',
  templateUrl: './crud-dialog.component.html',
  styleUrls: ['./crud-dialog.component.css']
})
export class CrudDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CrudDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: bookDTO) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
