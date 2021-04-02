import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestController } from './test/test.controller';
import { RoutesModule } from './routes/routes.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    RoutesModule,
    MongooseModule.forRoot('mongodb://root:root@db/nest?authSource=admin', {
      useNewUrlParser: true,
    }),
  ],
  controllers: [AppController, TestController],
  providers: [AppService],
})
export class AppModule {}
