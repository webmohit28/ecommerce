import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  catList: any = [];

  constructor(private _productsService: ProductsService) {}

  ngOnInit(): void {
    this._productsService.getProductList().subscribe((res) => {
      this.catList = res;
    });
  }
}
