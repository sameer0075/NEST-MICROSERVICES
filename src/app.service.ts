import { Injectable } from '@nestjs/common';

let bookStore:any = []

@Injectable()
export class AppService {
  getBookByID(bookID: string) {
    console.log("microservice response get single book")
    return bookStore.find( (b:any) => b.id == bookID)
  }

  getAllBooks() {
   console.log("microservice response get all books")
   return bookStore;
  }

  addBook(book: any) {
  console.log("microservice response creat book")
  const exists = bookStore.find( (b: any) => {
    return b.title == book.title &&
          b.author == book.author &&
          b.release_date == book.release_date
  })
  if(exists) return false;
  book.id = "Book_" + (bookStore.length + 1)
  bookStore.push(book)
  return book.id;
  }
}
