import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productList: any = [];

  constructor(
    private _productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._productsService.getProductList().subscribe((res) => {
      this.productList = res;
    });
  }
  showProduct(id) {
    this.router.navigate(['/products', id]);
  }
}
