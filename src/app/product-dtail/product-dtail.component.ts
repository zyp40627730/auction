import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-dtail',
  templateUrl: './product-dtail.component.html',
  styleUrls: ['./product-dtail.component.css']
})
export class ProductDtailComponent implements OnInit {

  private productTitle: string;
  constructor (private routerInfo: ActivatedRoute) { }

  ngOnInit() {
    this.productTitle = this.routerInfo.snapshot.params['productTitel'];
  }

}
