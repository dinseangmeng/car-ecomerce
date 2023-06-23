import { Body, Controller, Get, Post, Query, Req, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { CarsService } from './cars.service';
import { JwtGuard } from 'src/Auth/guard/jwt.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { car_validator } from 'src/Validation/car/index';
import { Request } from 'express';

@Controller('api/cars')
export class CarsController {
    constructor(private readonly carService:CarsService){}

    @Get("/")
    listing(@Query('page') page:Number = 0,@Query('size') size:Number = 50){
        return this.carService.listing(page,size)
    }

    @Post("/")
    @UseGuards(JwtGuard)
    @UseInterceptors(FileInterceptor('image'))
    createCard(@UploadedFile() file:any,@Body() car:car_validator, @Req() reg:Request){
        // return card;
        return this.carService.add(file,car,reg.user)
    }
}
