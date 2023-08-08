import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  //  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  //     AppModule,
  //     {
  //       transport: Transport.TCP,
  //       options: {
  //       port: 3000
  //     }
  //   },
  // );

  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      port: 3000,
    },
  });
  await app.startAllMicroservices();
  app.listen(3000)
}
bootstrap();
