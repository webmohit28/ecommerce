import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
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
