import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(@Inject('BOOKS_SERVICE') private client: ClientProxy,
  @Inject('TEST_SERVICE') private clientTest: ClientProxy) {}

  @Get()
  getAllBooks() {
    console.log("main backend response get all books")
    return this.client.send({cmd: 'get_books'}, {})
  }

  @Get(':id')
  getBookByID(@Param('id') id ) {
    console.log("main backend response get single book")
    return this.client.send({cmd: 'get_book'}, id)
  }

  @Post()
  createNewBook(@Body() book: any) {
    console.log("main backend response create book")
    return this.client.send({cmd: 'add_book'}, book)
  }

  @Post('create_test')
  createTest(@Body() test: any) {
    console.log("main backend response create test")
    return this.clientTest.send({cmd: 'create_test'}, test)
  }

}
