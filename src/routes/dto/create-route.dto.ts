import {
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

class PositionDto {
  @IsNumber()
  @IsNotEmpty()
  lat: number;

  @IsNumber()
  @IsNotEmpty()
  lng: number;
}

export class CreateRouteDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @ValidateNested()
  @IsNotEmpty()
  startPosition: PositionDto;

  @ValidateNested()
  @IsNotEmpty()
  endPosition: PositionDto;
}

//DTO Data transfer object
