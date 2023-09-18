import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  allowNewItem = false;
  itemStatus = 'There is no item';
  // itemTitle = 'Special Deck'
  // itemDesc = 'Blue-eyes White Dragon';
  itemAdd = false;

  constructor() {
    setTimeout(() => {
      this.allowNewItem = true;
    }, 10000)
  }

  ngOnInit(): void {

  }

  onItemAdd() {
    this.itemAdd = true;
    this.itemStatus = 'Successfully add an item ';
  }

  getColor() {
    return this.itemAdd === true ? 'green' : 'red';
  }

  deckList: any = [
    {
      title: 'Obelisk the Tormentor',
      desc: 'Egyptian God deck using by Seto Kaiba',
      image: 'https://w0.peakpx.com/wallpaper/643/410/HD-wallpaper-obelisk-god-cards-kaiba-obelisk-the-tormentor-ra-slifer-slifer-the-sky-dragon-winged-dragon-of-ra-yu-gi-oh-yugi-thumbnail.jpg'
    },
    {
      title: 'Slifer the Sky Dragon',
      desc: 'Egyptian God deck using by Muto Yugi',
      image: 'https://m.media-amazon.com/images/I/51sfVrtXX1L.jpg'
    },
    {
      title: 'Winged Dragon of RA',
      desc: 'Egyptian God deck using by Malik',
      image: 'https://m.media-amazon.com/images/I/51Vs5-T5PJL._AC_UF894,1000_QL80_.jpg',
    }
  ]

}
