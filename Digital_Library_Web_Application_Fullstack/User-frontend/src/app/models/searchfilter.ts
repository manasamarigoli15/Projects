export class SearchFilter
{
    title: string|undefined;
    author: string|undefined;
    genre: string|undefined;

    constructor(title:string,author:string,genre:string) {
        this.title = title;
        this.author = author;
        this.genre = genre;
    }
}