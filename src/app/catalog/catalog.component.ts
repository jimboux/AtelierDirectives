import { Component } from '@angular/core';
// import { produit } from '../model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  products  = [
    { id: 1, name: "Thomas", price: 25, promo: 40},
    { id: 2, name: "Jimbo", promo: 30},
    { id: 3, name: "Gontran", price: 120, promo : 20},
    { id: 4, name: "HASBULLA", price: 1220},
    { id: 5, name: "Nicolas", price: 25, promo: 40},
    { id: 6, name: "Adrien", promo: 30},
    { id: 7, name: "Amina", price: 120, promo : 40},
    { id: 8, name: "Cathy", price: 12},
  ]
  // productList = produit2;
  
 }
