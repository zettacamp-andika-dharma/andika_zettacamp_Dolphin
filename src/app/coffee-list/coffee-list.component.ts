import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CoffeeService } from 'src/app/shared/coffee.service';
import { Coffee } from 'src/app/shared/coffee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {

  coffees: Coffee[] = this.coffeeService.coffees

  constructor(private coffeeService: CoffeeService, private router: Router) { }

  ngOnInit(): void {
  }

  selectCoffee(coffeeIndex: number) {
    this.coffeeService.setSelecCoffee(this.coffees[coffeeIndex]);
    this.router.navigate(['/coffee-detail', this.coffees[coffeeIndex].id])
  }
}
