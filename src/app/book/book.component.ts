import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatCard, MatCardHeader, MatCardTitle } from '@angular/material';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  items: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/item').subscribe(data => {
    this.items = data;
  });
  }

}
