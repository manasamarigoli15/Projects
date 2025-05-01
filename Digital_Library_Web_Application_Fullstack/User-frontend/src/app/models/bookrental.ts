import { Book } from "./book";
import { SignUp } from "./sign-up";

export class BookRental {
    id: number = 0;
    rentalDate: string = "";
    dueDate: string = "";
    actualReturnDate: string = "";
    rentAmount: number = 0;
    hasReturned: boolean = false;
    fineAmount: number = 0;
    book:Book = new Book();
    user:SignUp = new SignUp()

    constructor(
        id:number,
        rentalDate:string,
        dueDate:string,
        actualReturnDate:string,
        rentAmount:number,
        hasReturned: boolean,
        fineAmount: number,
        book:Book,
        user: SignUp
    )
    {
        this.id = id;
        this.rentalDate = new Date(rentalDate).toLocaleDateString();
        this.dueDate = dueDate;
        this.actualReturnDate = actualReturnDate;
        this.rentAmount = rentAmount;
        this.hasReturned = hasReturned;
        this.fineAmount = fineAmount;
        this.book = book;
        this.user = user;
    }
}

