import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentFourComponent } from './content-four/content-four.component';
import { ContentFiveComponent } from './content-five/content-five.component';
import { ContentSixComponent } from './content-six/content-six.component';



@NgModule({
  declarations: [
    ContentFourComponent,
    ContentFiveComponent,
    ContentSixComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContentFiveComponent
  ]
})
export class PageTwoModule { }
