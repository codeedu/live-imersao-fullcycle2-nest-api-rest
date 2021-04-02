import { Module } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { RoutesController } from './routes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Route, RouteSchema } from './entities/route.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Route.name, schema: RouteSchema }]),
  ],
  controllers: [RoutesController],
  providers: [RoutesService],
})
export class RoutesModule {}
