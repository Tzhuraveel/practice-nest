import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppConfigModule } from './config/app/config.module';
import { typeOrmConfig } from './config/database/type-orm-configuration';

@Module({
  imports: [AppConfigModule, TypeOrmModule.forRootAsync(typeOrmConfig)],
})
export class AppModule {}
