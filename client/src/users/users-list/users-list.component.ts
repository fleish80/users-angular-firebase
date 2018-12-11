import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.users = db.collection('users').valueChanges();
  }

  ngOnInit() {
  }

}
