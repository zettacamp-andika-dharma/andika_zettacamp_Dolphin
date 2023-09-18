import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  itemTitle: string = '';
  itemDesc: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
