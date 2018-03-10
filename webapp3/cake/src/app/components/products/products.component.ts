import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    cakeapi :String='http://localhost:88/cakelist'
    @Input() lantype: string

    constructor() { }

    ngOnInit() {
    }

}
