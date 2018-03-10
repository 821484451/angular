import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
    orderapi: string = 'http://localhost:88/orderlist'
    constructor() { }

    ngOnInit() {
    }

}
