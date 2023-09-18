import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class booksService {
  private listBook: any[] = [
    {
      id: 1,
      img: 'https://inc.mizanstore.com/aassets/img/com_cart/produk/covGA001942.jpg',
      title: 'Koala Kumal',
      author: 'Raditya Dika',
      desc: 'KOALA KUMAL masih bercerita tentang Dika seorang cowok yang baru saja batal menikah karena pacarnya Andrea selingkuh darinya dengan cowok bernama James. Patah hatinya membuat Dika kesulitan menulis bab terakhir dari bukunya. Suatu hari Dika bertemu dengan cewek bernama Trishna, cewek yang unik yang membuat sudut pandang Dika terhadap dunia menjadi berbeda.'
    },
    {
      id: 2,
      img: 'https://inc.mizanstore.com/aassets/img/com_cart/produk/covGA001938.jpg',
      title: 'Kambing Jantan',
      author: 'Raditya Dika'
    },
    {
      id: 3,
      img: 'https://inc.mizanstore.com/aassets/img/com_cart/produk/ubur-ubur-lembur-raditya-dika.jpg',
      title: 'Ubur-ubur Lembur',
      author: 'Raditya Dika'
    }
  ]

  private books: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);

  selectedBook$ = this.books.asObservable();

  constructor() { }

  getBook() {
    return this.listBook;
  }

  updateBookById(id: number) {
    this.books.next(id)
  }
}
