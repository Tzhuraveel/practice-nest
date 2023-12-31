import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { AppConfigService } from './config/app/configuration.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const appConfig: AppConfigService =
    app.get<AppConfigService>(AppConfigService);

  await app.listen(appConfig.port, appConfig.hostname, () => {
    const url = `http://${appConfig.hostname}:${appConfig.port}`;
    Logger.log(`Server is running ${url}`);
  });
}
void bootstrap();
