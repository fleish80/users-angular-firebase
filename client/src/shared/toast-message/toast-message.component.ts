import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-toast-message',
  templateUrl: './toast-message.component.html',
  styleUrls: ['./toast-message.component.scss']
})
export class ToastMessageComponent implements OnInit {

  message: string;
  @ViewChild('success')
  private successTmpl: TemplateRef<any>;

  @ViewChild('failure')
  private failureTmpl: TemplateRef<any>;

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  public openSuccess(message: string) {
    this.snackBar.dismiss();
    this.message = message;
    this.snackBar.openFromTemplate(this.successTmpl, {
      panelClass: ['toast-message', 'toast-success']
    });
  }

  public openFailure(message: string) {
    this.snackBar.dismiss();
    this.message = message;
    this.snackBar.openFromTemplate(this.failureTmpl, {
      panelClass: ['toast-message', 'failure-success']
    });
  }

}
