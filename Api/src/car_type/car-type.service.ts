import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FileService } from 'src/File/file.service';
import { type_validator } from 'src/Validation/car/index';
import { PrismaService } from 'src/prisma/prisma.service';
import * as  fs from "fs";
@Injectable()
export class CarTypeService {
    constructor(
            private prisma : PrismaService,
            private fileService:FileService,
        ){}

    async listing(page:Number,size:Number){
        const car_model_n=await this.prisma.car_type.count({})
        const car_model=await this.prisma.car_type.findMany({
            select:{
                id:true,
                name:true,
                imagePath:true,
                car:true
            },
            skip:Number(page) * Number(size),
            take:Number(size)
        })
        return {
            car_model_n,
            car_model
        }
    }

    async add(file:any,car_model:type_validator){
        let filePath:any="file/Default/default_car_model.png"
        if(file){
            filePath=await this.fileService.SaveImage(file,'file')

        }
        const carModel=await this.prisma.car_type.create({
            data:{
                name:String(car_model.name),
                imagePath:filePath
            },
        })
        return carModel;
    }

    async edit(file:any,car_model:type_validator,id:number){
        const carModelTmp=await this.prisma.car_type.findFirst({
            where:{
                id:Number(id)
            }
        });
        if(!carModelTmp){
            return {msg:"Car model not found"}
        }
        if(file){
            if(carModelTmp.imagePath!="file/Default/default_car_model.png"){
                
                
                try {
                    fs.unlinkSync(`./${carModelTmp.imagePath}`)
                    //file removed
                } catch(err) {
                    console.error(err)
                }
                
            }
            
            var newName=await this.fileService.SaveImage(file,'file')
        }else{
            if(carModelTmp.imagePath) var newName = carModelTmp.imagePath
        }
        const updatedModel=await this.prisma.car_type.update({
            where:{
                id:Number(id)
            },
            data:{
                name:String(car_model.name),
                imagePath:newName!=null || newName !=undefined ?newName : "file/Default/default_car_model.png"
            },
        }) 
        return updatedModel;
    }
}
