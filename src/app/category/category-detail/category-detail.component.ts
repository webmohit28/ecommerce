import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss'],
})
export class CategoryDetailComponent implements OnInit {
  @Input() catItem: any;

  constructor() {}

  ngOnInit(): void {}
}
