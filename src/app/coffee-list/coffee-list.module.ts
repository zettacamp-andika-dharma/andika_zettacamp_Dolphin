import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeListComponent } from './coffee-list.component';



@NgModule({
  declarations: [CoffeeListComponent],
  imports: [
    CommonModule
  ],
  exports: [CoffeeListComponent]
})
export class CoffeeListModule { }
