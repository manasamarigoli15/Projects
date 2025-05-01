import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { RentRequest } from 'src/app/models/rentrequest';
import { SearchFilter } from 'src/app/models/searchfilter';
import { BookService } from 'src/app/services/book.service';
import { BookrentalService } from 'src/app/services/bookrental.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  sf: SearchFilter = new SearchFilter("", "", "All");
  books: Book[] = [];
  rentRequest: RentRequest = new RentRequest(0);

  constructor(private bookService: BookService,
    private bookRentalService: BookrentalService,
    private route: Router
  ) {
    let r = this.bookService.getBooks();
    r.subscribe(d => this.books = d);
  }

  searchFilter(): void {
    console.debug(this.sf);
    let r = this.bookService.getSearchFilter(this.sf);
    r.subscribe(d => { this.books = d; console.debug(d); });
  }

  onRentRequest(id: any) {
    const token = sessionStorage.getItem("Token");
    if (!token) {
      Swal.fire('You need to sign in to rent a book', ' ', 'error');
      return;
    }

    this.rentRequest.bookId = id;
    this.bookRentalService.sendRentRequest(this.rentRequest)
      .subscribe({
        next: (d) => {
          console.debug(d);
          Swal.fire('You just rented a book!', ' ', 'success');
          this.route.navigateByUrl("/bookrental");
        },
        error:
          (error) => {
            console.debug(error);
            Swal.fire(error.error, 'Something went wrong', 'error');
          }
      });
  }
}


