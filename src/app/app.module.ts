import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookDetailModule } from './book-detail/book-detail.module';
import { BookListModule } from './book-list/book-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BookDetailModule,
    BookListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
