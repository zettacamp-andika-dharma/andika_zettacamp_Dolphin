import { Component, OnInit, OnDestroy } from '@angular/core';
import { booksService } from '../shared/books.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {
  listBook: any;

  constructor(private BooksService: booksService) { }

  updateBookById(id: number) {
    this.BooksService.updateBookById(id)
  }

  subs = new Subscription()

  ngOnInit(): void {
    this.subs.add(this.BooksService.selectedBook$.subscribe(bookId => {
      // const bookData = this.books.find((bookItem: any) => bookItem.id === bookIndex)
      console.log(bookId)
    })),
      this.listBook = this.BooksService.getBook();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
