import { Module } from '@nestjs/common';
import { CarTypeService } from './car-type.service';
import { CarTypeController } from './car-type.controller';
import { JwtStrategy } from 'src/Auth/strategry';
import { RolesGuard } from 'src/Auth/guard/role.guard';
import { FileService } from 'src/File/file.service';

@Module({
  providers: [CarTypeService,JwtStrategy,RolesGuard,FileService],
  controllers: [CarTypeController]
})
export class CarTypeModule {}
