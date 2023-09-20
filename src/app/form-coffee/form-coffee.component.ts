import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Coffee } from '../shared/coffee.model';
import { CoffeeService } from '../shared/coffee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-coffee',
  templateUrl: './form-coffee.component.html',
  styleUrls: ['./form-coffee.component.css']
})
export class FormCoffeeComponent implements OnInit {

  newCoffee: Coffee = {
    id: 0,
    name: '',
    description: '',
    origin: '',
    roastLevel: '',
    price: 0,
    rating: 0,
    imageUrl: '',
  };

  constructor(private coffeeService: CoffeeService, private route: Router) { }

  onAddCoffee(): void {
    this.coffeeService.addCoffee(this.newCoffee);
    this.route.navigate(['/coffee-list'])

    this.newCoffee = {
      id: 0,
      name: '',
      description: '',
      origin: '',
      roastLevel: '',
      price: 0,
      rating: 0,
      imageUrl: '',
    };
  }

  ngOnInit(): void {
  }

}
