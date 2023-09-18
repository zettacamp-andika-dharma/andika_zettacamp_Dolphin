import { Component, OnChanges, OnInit, ViewEncapsulation, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserListComponent implements OnInit, OnChanges {
  tableData: any = [{ name: 'Liu Kang', email: 'liukang@pupuyu.kang', city: 'Earthrealm', password: 'Kangkung' }];

  onUserAdded(tableUserData: { userName: string, userEmail: string, userCity: string, userPassword: string }) {
    this.ngOnChanges(this.tableData)
    this.tableData.push({
      name: tableUserData.userName,
      email: tableUserData.userEmail,
      city: tableUserData.userCity,
      password: tableUserData.userPassword
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    alert('ngOnChanges : Succesfully Input the Data');
    console.log(changes);
  }

  removeTable() {
    this.tableData = [];
  }

  constructor() { }

  ngOnInit(): void {
  }

}
