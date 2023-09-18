import { Component, OnInit, EventEmitter, Output, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FormsComponent implements OnInit {
  @Output() userCreated = new EventEmitter<{ userName: string; userEmail: string; userCity: string; userPassword: string }>();
  // newUserName: string = '';
  // newUserEmail: string = '';
  // newUserCity: string = '';
  // newUserPassword: string = '';
  @ViewChild('userEmailInput') userEmailInput: ElementRef;
  @ViewChild('userCityInput') userCityInput: ElementRef;
  @ViewChild('userPasswordInput') userPasswordInput: ElementRef;


  constructor() { }

  ngOnInit(): void {
  }




  onAddUser(nameInput: HTMLInputElement) {

    this.userCreated.emit({ userName: nameInput.value, userEmail: this.userEmailInput.nativeElement.value, userCity: this.userCityInput.nativeElement.value, userPassword: this.userPasswordInput.nativeElement.value })
    nameInput.value = ''
    this.userEmailInput.nativeElement.value = ''
    this.userCityInput.nativeElement.value = ''
    this.userPasswordInput.nativeElement.value = ''

  }

}
