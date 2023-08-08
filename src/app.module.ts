import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'BOOKS_SERVICE', // This name should match the name used in the main backend as well
        transport: Transport.TCP,
        options:{port:3000}
      },
      {
        name: 'TEST_SERVICE', // This name should match the name used in the main backend as well
        transport: Transport.TCP,
        options:{port:3000}
      }
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
