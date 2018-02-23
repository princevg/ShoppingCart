import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookEditComponent implements OnInit {

  Item = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getBook(this.route.snapshot.params['id']);
  }

  getBook(id) {
    this.http.get('/item/' + id).subscribe(data => {
      this.Item = data;
    });
  }

  updateBook(id, data) {
    this.http.put('/item/' + id, data)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/item-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
