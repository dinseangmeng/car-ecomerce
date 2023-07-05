import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './Auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './User/user.module';

import { UserModuleAdmin } from './cp/user/user.module';
import { FileModule } from './File/file.module';

import { MulterModule } from '@nestjs/platform-express';

import { AppController } from './app.controller';
import { APP_FILTER } from '@nestjs/core';
import { NotFoundExceptionFilter } from './Exception/404_Exception';
// import { Controller } from './..controller';
import { CarTypeModule } from './car_type/car-type.module';
import { CarsModule } from './cars/cars.module';
import { AwsS3Module } from './aws-s3/aws-s3.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true
    }),
    MulterModule.register({
      dest:'/file'
    }),
    AuthModule, 
    PrismaModule, UserModule,UserModuleAdmin, FileModule, CarTypeModule, CarsModule, AwsS3Module
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: NotFoundExceptionFilter,
    }
    
  ],
})
export class AppModule {}
