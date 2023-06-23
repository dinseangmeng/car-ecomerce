import {Controller,Get,Res,Query,Post, UseGuards, UseInterceptors, UploadedFile, Req, Delete, Param, Put} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { JwtGuard } from 'src/Auth/guard/jwt.guard'
import { FileService } from './file.service'
import { Request } from 'express';
import {existsSync, statSync} from 'fs'
@Controller('static')
export class FileController{
    constructor(private fileService:FileService){}
    
    @Get("/get/*")
    getCardImage(@Req() req, @Res() res){
        let filePath:String = req.url.replace('/static', '').replace('/get/','');
        filePath=filePath.split('%20').join(" ");
        const rootPath = './';
        // console.log(filePath);
        
        const file = `${rootPath}${filePath}`;
        console.log(file);
        
        if (existsSync(file) && statSync(file).isFile()) {
            return res.sendFile(file,{root:'./'});
        } else {
            return res.status(404).sendFile('./asset/file_NotFoundException.html',{root:'./src'});
        }
    }

  







}