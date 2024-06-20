import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permission } from './permission.entity';
import { PermissionsService } from './permissions.service';
import { PermissionsController } from './permissions.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Permission])],
  providers: [PermissionsService],
  controllers: [PermissionsController],
})
export class PermissionsModule {}
