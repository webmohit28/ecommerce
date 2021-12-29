import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss'],
})
export class ProductsDetailComponent implements OnInit {
  recId: number;
  productItem: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private _productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.recId = this.activatedRoute.snapshot.params.id;
    this._productsService.getProductDetail(this.recId).subscribe((res) => {
      this.productItem = res;
    });
  }
}
