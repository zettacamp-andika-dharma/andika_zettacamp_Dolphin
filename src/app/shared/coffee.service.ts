import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Coffee } from './coffee.model';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  coffees: Coffee[] = [
    {
      id: 1,
      name: 'Kopi Gayo',
      description: 'Varietas kopi arabika unggulan Indonesia',
      origin: 'Aceh, Indonesia',
      roastLevel: 'Light',
      price: 27000,
      rating: 5,
      imageUrl: 'https://manfaat.co.id/wp-content/uploads/2016/12/kopi-gayo.jpg'
    },
    {
      id: 2,
      name: 'Kopi Toraja',
      description: 'Aroma yang sangat khas dan juga harum',
      origin: 'Toraja, Indonesia',
      roastLevel: 'Light',
      price: 270000,
      rating: 4,
      imageUrl: 'https://manfaat.co.id/wp-content/uploads/2016/12/kopi-gayo.jpg'
    },
    {
      id: 3,
      name: 'Kopi Papua Wamena',
      description: 'Memiliki nuansa harum coklat dan herbal',
      origin: 'Papua, Indonesia',
      roastLevel: 'Light',
      price: 270000,
      rating: 4,
      imageUrl: 'https://manfaat.co.id/wp-content/uploads/2016/12/kopi-gayo.jpg'
    },
  ];

  // private coffeeSubject = new BehaviorSubject<Coffee | null>(null);
  // coffees$ = this.coffeeSubject.asObservable();

  private selectedCoffee = new BehaviorSubject<Coffee | null>(null);
  selectedCoffees$ = this.selectedCoffee.asObservable();


  constructor() { }

  addCoffee(newCoffee: Coffee): void {
    this.coffees.push(newCoffee);
  }

  setSelecCoffee(coffees: Coffee) {
    this.selectedCoffee.next(coffees)
  }
}
