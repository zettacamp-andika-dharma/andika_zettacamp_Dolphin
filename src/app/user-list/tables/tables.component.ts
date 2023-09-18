import { Component, OnInit, Input, ViewEncapsulation, OnDestroy, ViewChild, ElementRef, AfterViewInit, OnChanges, SimpleChanges, Output, EventEmitter, DoCheck } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TablesComponent implements OnInit, OnDestroy, AfterViewInit, DoCheck {
  @Input('userListData') tableData: [{ name: string; email: string; city: string; password: string }];
  @Input() name: string;
  @ViewChild('userTable') dataOnTable: ElementRef;
  @Output() listDataTable = new EventEmitter

  ngOnInit(): void {
    alert('ngOnInit: Successfully Rendering the Data')
  }

  ngAfterViewInit() {
    alert('ngAfterViewInit Called!');
    console.log('Rendering Table ' + this.dataOnTable.nativeElement.textContent)
  }


  constructor() {
    console.log('Constructor Changes!');
  }

  ngOnDestroy() {
    alert('ngOnDestroy: Destroy Data?');
  }

  onDestroyData() {
    this.listDataTable.emit();
    console.log('the Data has been Destroy');
  }

  onChangesName() {
    this.tableData[0].name = 'Kung Lao';
  }

  ngDoCheck() {
    alert('ngDoCheck: Checking the Data');
    console.log('ngDoCheck: Checking the Data')
  }

}
