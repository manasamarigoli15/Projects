import { BookRental } from "./bookrental";

export class RentRequest {
    bookId: number = 0;
    // bookRentals: BookRental|undefined;

    constructor(
        bookId:number,
        // bookRentals:BookRental|undefined
    ) {
        this.bookId = bookId;
        // this.bookRentals = bookRentals;
    }
}
