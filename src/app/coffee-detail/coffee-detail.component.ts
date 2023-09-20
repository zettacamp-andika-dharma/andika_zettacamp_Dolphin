import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoffeeService } from 'src/app/shared/coffee.service';
import { Coffee } from '../shared/coffee.model';

@Component({
  selector: 'app-coffee-detail',
  templateUrl: './coffee-detail.component.html',
  styleUrls: ['./coffee-detail.component.css']
})
export class CoffeeDetailComponent implements OnInit {
  // @Input() coffee: Coffee;

  // coffee: Coffee;

  coffeeById: number;

  coffeeDetail: Coffee;

  constructor(private coffeService: CoffeeService, private route: Router, private router: ActivatedRoute) { }

  ngOnInit(): void {
    // this.coffeService.selectedCoffees$.subscribe((coffees) => {
    //   this.coffee = coffees;
    // })
    let coffeeById = parseInt(this.router.snapshot.params['id']);
    console.log(typeof coffeeById, coffeeById)
    this.coffeeDetail = this.coffeService.coffees.find(getCoffeeById =>
      getCoffeeById.id === coffeeById
    );
  }

  backToList() {
    this.route.navigate(['/coffee-list'])
  }

}
