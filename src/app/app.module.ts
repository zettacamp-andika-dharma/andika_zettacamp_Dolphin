import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormCoffeeModule } from './form-coffee/form-coffee.module';
import { CoffeeListModule } from './coffee-list/coffee-list.module';
import { CoffeeDetailModule } from './coffee-detail/coffee-detail.module';
import { CoffeeService } from './shared/coffee.service';
import { CoffeeDetailComponent } from './coffee-detail/coffee-detail.component';
import { FormCoffeeComponent } from './form-coffee/form-coffee.component';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';

const appRoutes: Routes = [
  {
    path: '', component: FormCoffeeComponent
  },
  {
    path: 'coffee-list', component: CoffeeListComponent
  },
  {
    path: 'coffee-detail/:id', component: CoffeeDetailComponent
  },
  {
    path: 'coffee-detail', component: CoffeeDetailComponent
  }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormCoffeeModule,
    CoffeeListModule,
    CoffeeDetailModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CoffeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
