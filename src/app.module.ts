import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { typeOrmConfig } from './config/database/type-orm-configuration';

@Module({
  imports: [TypeOrmModule.forRootAsync(typeOrmConfig)],
})
export class AppModule {}
