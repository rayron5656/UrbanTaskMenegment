import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-delete-dialog',
  templateUrl: './confirm-delete-dialog.component.html',
  styleUrls: ['./confirm-delete-dialog.component.css']
})
export class ConfirmDeleteDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmDeleteDialogComponent>) {}

  ngOnInit(): void {
  }

}
