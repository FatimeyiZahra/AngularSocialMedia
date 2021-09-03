import { Component, OnInit } from '@angular/core';
import { Model, Product } from '../Model';
import { ProductService } from '../product.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products?: Product[];

  constructor(private productService: ProductService) {
 this.getProducts()
  }



  ngOnInit(): void {

  }
  getProducts(){
     this.productService.getProducts().subscribe(products=>{
       this.products=products;
     });
  }


}
