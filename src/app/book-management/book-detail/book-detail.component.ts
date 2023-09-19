import { Component, OnInit } from '@angular/core';
import { BookManagementService } from '../book-management.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  selectedBook: any | null = null;

  constructor(private bookService: BookManagementService) { }

  ngOnInit(): void {
    this.bookService.selectedBook$.subscribe((book) => {
      this.selectedBook = book;
    });
  }
}
