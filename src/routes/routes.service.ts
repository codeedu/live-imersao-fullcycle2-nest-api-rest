import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { Route, RouteDocument } from './entities/route.entity';

@Injectable()
export class RoutesService {
  constructor(
    @InjectModel(Route.name)
    private routeModel: Model<RouteDocument>,
  ) {}

  create(createRouteDto: CreateRouteDto) {
    return this.routeModel.create(createRouteDto);
  }

  findAll() {
    return this.routeModel.find().exec();
  }

  findOne(id: string) {
    return this.routeModel.findById(id).exec();
  }

  async update(id: string, updateRouteDto: UpdateRouteDto) {
    await this.routeModel.updateOne({ _id: id }, updateRouteDto).exec();
    return this.routeModel.findById(id).exec();
  }

  remove(id: string) {
    this.routeModel.deleteOne({ _id: id });
  }
}
