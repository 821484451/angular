import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
    userapi: string='http://localhost:88/userlist'
    constructor() { }

    ngOnInit() {
    }

}
