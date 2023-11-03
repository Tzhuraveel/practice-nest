import { registerAs } from '@nestjs/config';

const configToken = 'app';

export default registerAs(configToken, () => ({
  environment: process.env.APP_ENVIRONMENT,
  port: process.env.APP_PORT,
  hostname: process.env.APP_HOST,
}));
