import { Body, Controller, Get, Param, Post, Put, Query, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { CarTypeService } from './car-type.service';
import { JwtGuard } from 'src/Auth/guard/jwt.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { type_validator } from 'src/Validation/car';
import { Status } from 'src/Auth/decorators/role.decorator';
import { RoleEnum } from 'src/Auth/enum/role.enum';
import { RolesGuard } from 'src/Auth/guard/role.guard';

@Controller('api/car-type')
export class CarTypeController {
    constructor(private readonly carModelService:CarTypeService){
        
    }
    @Get("/")
    listing(@Query('page') page:Number = 0,@Query('size') size:Number = 50){
        return this.carModelService.listing(page,size)
    }

    @Post("/")
    @Status(RoleEnum.Admin)
    @UseGuards(JwtGuard,RolesGuard) 
    @UseInterceptors(FileInterceptor('image'))
    add(@UploadedFile() file:any,@Body() carModel : type_validator){
        return this.carModelService.add(file,carModel)
    }
    @Put("/:id")
    @Status(RoleEnum.Admin)
    @UseGuards(JwtGuard,RolesGuard)    
    @UseInterceptors(FileInterceptor('image'))
    update(@Param() id,@UploadedFile() file:any,@Body() carModel : type_validator){
        // return id;
        return this.carModelService.edit(file,carModel,id.id);
    }
}
