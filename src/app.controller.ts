import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({cmd: 'add_book'})
  addBook(book:any): any {
    return this.appService.addBook(book)
  }

  @MessagePattern({cmd: 'get_book'})
  getBook(bookID: string): any {
    return this.appService.getBookByID(bookID)
  }

  @MessagePattern({cmd: 'get_books'})
  getBooks(): any {
    return this.appService.getAllBooks()
  }

}
