import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookManagementService {
  private booksSubject = new BehaviorSubject<any[]>([]);
  books$ = this.booksSubject.asObservable();

  private selectedBookSubject = new BehaviorSubject<any | null>(null);
  selectedBook$ = this.selectedBookSubject.asObservable();

  constructor() { }

  setBooks(books: any[]): void {
    this.booksSubject.next(books);
  }

  setSelectedBook(book: any): void {
    this.selectedBookSubject.next(book);
  }
}
