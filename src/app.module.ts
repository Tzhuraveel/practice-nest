import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppConfigModule } from './config/app/config.module';
import configuration from './config/database/configuration';
import { typeOrmConfig } from './config/database/type-orm-configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    AppConfigModule,
    TypeOrmModule.forRootAsync(typeOrmConfig),
  ],
})
export class AppModule {}
