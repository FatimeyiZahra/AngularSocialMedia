import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../Model';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
@Input() product?:Product;
  constructor() { }

  ngOnInit(): void {
  }

}
