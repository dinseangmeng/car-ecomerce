import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config/dist';
import { createWriteStream , existsSync, mkdirSync,unlinkSync} from 'fs';

@Injectable()
export class FileService {
  constructor(
    private prisma :PrismaService,
    private config:ConfigService
    ){}
    
    SaveImage(file:any,path:string){
      if (!file) {
        throw new Error('No file uploaded');
      }
      const { originalname, buffer } = file;
      if (!buffer || buffer.length === 0) {
        throw new Error('Empty file buffer');
      }
      const fileName = `${Date.now()}_${originalname}`;
      var filePath = `${path}/${fileName}`;
      if (!existsSync(`${path}`)) {
        mkdirSync(`${path}`);
      }
      const fileStream = createWriteStream(filePath);
      fileStream.on('error', (error) => {
        throw error;
      });
      fileStream.write(buffer);
      fileStream.end();
      return filePath;
    }
    
    PostOtherFile(file:any){
      let path='file/asset'
      if (!file) {
        throw new Error('No file uploaded');
      }
      const { originalname, buffer } = file;
      if (!buffer || buffer.length === 0) {
        throw new Error('Empty file buffer');
      }
      var fileName = `${Date.now()}_${originalname}`;
      var filePath = `./${path}/${fileName}`;
      if (!existsSync(`./${path}`)) {
        mkdirSync(`./${path}`);
      }
      const fileStream = createWriteStream(filePath);
      fileStream.on('error', (error) => {
        throw error;
      });
      fileStream.write(buffer);
      fileStream.end();
      return {fileName,filePath};
    }
    
    

    
  }
  