import { Component, OnInit } from '@angular/core';
import { booksService } from '../shared/books.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  constructor(private BooksService: booksService) { }

  ngOnInit(): void {
  }

}
