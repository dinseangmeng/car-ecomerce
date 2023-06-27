import { Injectable } from '@nestjs/common';
import { Decimal } from '@prisma/client/runtime';
import { FileService } from 'src/File/file.service';
import { car_validator } from 'src/Validation/car/index';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CarsService {
    constructor(
        private prisma : PrismaService,
        private fileService:FileService,
    ){}

    async listing(page:Number,size:Number){
        const cars_n=await this.prisma.car.count({})
        const cars=await this.prisma.car.findMany({
            select:{
                name:true,
                imagePath:true,
                model:true,
                price:true,
                car_type_id:true,
                userId:true,
                type:true,
                user:{
                    select:{
                        email:true,
                        username:true,
                        firstName:true,
                        lastName:true,
                        profile:true,
                        statusId:true,
                        status:{
                            select:{
                                statusName:true,
                                id:true
                            }
                        }
                    },
                }
            },
            skip:Number(page) * Number(size),
            take:Number(size)
        })
        return {cars_n,cars}
    }

    async add(file:any,carData:car_validator ,User:any){
        let filePath:any="file/Default/default_image_Card.png"
        if(file){
            filePath=await this.fileService.SaveImage(file,'file')
        }
        const newCard=await this.prisma.car.create({
            data:{
                name:String(carData.name),
                imagePath:filePath,
                model:String(carData.model),
                price:Number(carData.price),
                car_type_id:Number(carData.car_type_id),
                userId:User.id
            },
            include:{
                type:true,
                user:{
                    select:{
                        email:true,
                        username:true,
                        firstName:true,
                        lastName:true,
                        profile:true,
                        statusId:true,
                        status:{
                            select:{
                                statusName:true,
                                id:true
                            }
                        }
                    },
                }
            }
        })
        return newCard;
    }
}
