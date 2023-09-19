import { Component, OnInit, Input } from '@angular/core';
import { BookManagementService } from '../book-management.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  @Input() book: any;

  constructor(private bookService: BookManagementService) { }

  selectBook() {
    this.bookService.setSelectedBook(this.book);
  }

  ngOnInit(): void {
  }

}
