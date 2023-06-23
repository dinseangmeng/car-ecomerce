import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { JwtStrategy } from 'src/Auth/strategry';
import { RolesGuard } from 'src/Auth/guard/role.guard';
import { FileService } from 'src/File/file.service';

@Module({
  providers: [CarsService,JwtStrategy,RolesGuard,FileService],
  controllers: [CarsController]
})
export class CarsModule {}
