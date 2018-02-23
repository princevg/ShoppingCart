import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookDetailComponent implements OnInit {

  Item = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getBookDetail(this.route.snapshot.params['id']);
  }

  getBookDetail(id) {
    this.http.get('/item/' + id).subscribe(data => {
      this.Item = data;
    });
  }

  deleteBook(id) {
  this.http.delete('/item/' + id)
    .subscribe(res => {
        this.router.navigate(['/items']);
      }, (err) => {
        console.log(err);
      }
    );
}

}
