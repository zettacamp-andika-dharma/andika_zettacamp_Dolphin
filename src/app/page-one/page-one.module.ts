import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentOneComponent } from './content-one/content-one.component';
import { ContentTwoComponent } from './content-two/content-two.component';
import { ContentThreeComponent } from './content-three/content-three.component';



@NgModule({
  declarations: [
    ContentOneComponent,
    ContentTwoComponent,
    ContentThreeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContentOneComponent
  ]
})
export class PageOneModule { }
