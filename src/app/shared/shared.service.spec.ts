import { TestBed } from '@angular/core/testing';

import { booksService } from './books.service';

describe('BooksService', () => {
  let service: booksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(booksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
