import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config/dist';
import { createWriteStream , existsSync, mkdirSync,unlinkSync} from 'fs';
import { AwsS3Service } from 'src/aws-s3/aws-s3.service';

@Injectable()
export class FileService {
  constructor(
    private prisma :PrismaService,
    private config:ConfigService,
    private readonly awsS3Service: AwsS3Service
    ){}
    
    async SaveImage(file:any,path:string){
      const bucketName = 'car-eccomerce-ip';
      const fileExtension = file.originalname.split('.').pop(); // Get the file extension
      const newName = `${Date.now()}${Math.round(Math.random()*9999999)}.${fileExtension}`;
  
      const result = await this.awsS3Service.uploadFile(bucketName, newName, file.buffer,'public-read');
      return result.Location;
    }
    
 
    

    

    
  }
  