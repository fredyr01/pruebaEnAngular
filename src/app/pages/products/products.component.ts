import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { tap } from 'rxjs/operators';
import { Product } from './interfaces/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products!: Product[];
  constructor(private productSvc: ProductsService) { }

  ngOnInit(): void {
    this.productSvc.getProducts()
    .pipe(
      tap( (products: Product [] )=> this.products = products)
    )
    .subscribe();
  }

  addToCart(product: Product):  void{
    // console.log('Add to Cart', product);
  }

}
