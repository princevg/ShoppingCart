import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './book/book-detail/book-detail.component';
import { BookCreateComponent } from './book/book-create/book-create.component';
import { BookEditComponent } from './book/book-edit/book-edit.component';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatOptionModule,
  MatInputModule,
  MatDialogModule,
  MatCheckboxModule,
  MatTableModule
} from '@angular/material';
import { PowerHeaderComponent } from './power-header/power-header.component';
const appRoutes: Routes = [
  {
    path: 'items',
    component: BookComponent,
    data: { title: 'Item List' }
  },
  {
    path: 'item-details/:id',
    component: BookDetailComponent,
    data: { title: 'Item Details' }
  },
  {
    path: 'item-create',
    component: BookCreateComponent,
    data: { title: 'Create Item' }
  },
  {
    path: 'item-edit/:id',
    component: BookEditComponent,
    data: { title: 'Edit Item' }
  },
  { path: '',
    redirectTo: '/items',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailComponent,
    BookCreateComponent,
    BookEditComponent,
    PowerHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
    appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatInputModule,
    MatDialogModule,
    MatCheckboxModule,
    MatTableModule,
    MDBBootstrapModule.forRoot()
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatInputModule,
    MatDialogModule,
    MatCheckboxModule,
    MatTableModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
