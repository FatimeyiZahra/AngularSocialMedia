import { Component, OnInit } from '@angular/core';
import { Product } from '../Model';
import { ProductService } from '../product.service';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  constructor(private productService:ProductService) {}

  ngOnInit(): void {}
  addProduct(name: string, price: string, IsActice: boolean) {
    console.log(name);
    console.log(price);
    console.log(IsActice);

    const p = new Product(this.productService.getProducts().length+1,name,price,IsActice);
    this.productService.addProduct(p);
  }
}
