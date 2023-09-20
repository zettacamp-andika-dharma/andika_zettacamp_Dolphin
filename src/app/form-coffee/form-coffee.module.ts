import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCoffeeComponent } from './form-coffee.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormCoffeeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormCoffeeComponent
  ]
})
export class FormCoffeeModule { }
