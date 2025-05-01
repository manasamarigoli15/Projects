import { Component } from '@angular/core';
import { BookRental } from 'src/app/models/bookrental';
import { ReturnRequest } from 'src/app/models/returnrequest';
import { BookrentalService } from 'src/app/services/bookrental.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-book-rental',
  templateUrl: './book-rental.component.html',
  styleUrls: ['./book-rental.component.css']
})
export class BookRentalComponent {

  rentedBooksList: BookRental[] = [];
  returnRequest: ReturnRequest = new ReturnRequest(0);

  constructor(
    private bookrentalService: BookrentalService
  ) {
    this.getRentedBooks();
  }

  getRentedBooks():void{
    let rentedBooks = this.bookrentalService.getRentedBooks();

    rentedBooks.subscribe({
      next: (d) => {
        this.rentedBooksList = d;
        console.debug(this.rentedBooksList);
        this.rentedBooksList.sort((a,b) => {
          const dueDateA = new Date(a.dueDate);
          const dueDateB = new Date(b.dueDate);
          return dueDateB.getDate() - dueDateA.getDate();
        });
        console.debug('Sorted rentedBooksList:', this.rentedBooksList);
      }, 
      error:
        (error) => {
          console.error('Error fetching rented books: ', error);
        }
    });
  }

  onReturnRequest(id: any) {
    this.returnRequest.bookId = id;
    this.bookrentalService.sendReturnRequest(this.returnRequest)
      .subscribe(d => { console.debug(d); 
        Swal.fire('You successfully returned a book!',' ','success');
        this.getRentedBooks();
      });
  }
}
