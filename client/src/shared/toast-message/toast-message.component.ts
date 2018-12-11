import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-toast-message',
  templateUrl: './toast-message.component.html',
  styleUrls: ['./toast-message.component.scss']
})
export class ToastMessageComponent implements OnInit {

  successMessage: string;
  @ViewChild('success')
  private successTmpl: TemplateRef<any>;

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  public openSuccess(message: string) {
    this.successMessage = message;
    this.snackBar.openFromTemplate(this.successTmpl, {
      panelClass: ['toast-message', 'toast-success']
    });
  }

}
