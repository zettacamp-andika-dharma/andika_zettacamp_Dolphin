import { Component, OnInit } from '@angular/core';
import { BookManagementService } from './book-management.service';

@Component({
  selector: 'app-book-management',
  templateUrl: './book-management.component.html',
  styleUrls: ['./book-management.component.css']
})
export class BookManagementComponent implements OnInit {

  constructor(private bookService: BookManagementService) { }

  ngOnInit(): void {
    const bookData = [{
      name: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      publisher: 'HarperCollins',
      publishDate: '1954-07-29'
    },
    {
      name: 'A Song of Ice and Fire',
      author: 'George R.R. Martin',
      publisher: 'Bantam Books',
      publishDate: '1996-08-01'
    },
    {
      name: 'Dune',
      author: 'Frank Herbert',
      publisher: 'Chilton Books',
      publishDate: '1965-08-01'
    }];
    this.bookService.setBooks(bookData)
  }



}
