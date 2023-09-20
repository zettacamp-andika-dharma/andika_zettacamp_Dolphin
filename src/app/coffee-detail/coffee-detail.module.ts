import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeDetailComponent } from './coffee-detail.component';



@NgModule({
  declarations: [CoffeeDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [CoffeeDetailComponent]
})
export class CoffeeDetailModule { }
