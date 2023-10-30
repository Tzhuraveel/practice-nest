/* eslint-disable */
const typeorm = require('typeorm');

let config;
try {
  console.log('ormConfig');
  config = require('./src/config/database/static/type-orm-configuration-static');
} catch {
  // config = require('./dist/src/config/database/type-orm-configuration');
}
const dataSource = new typeorm.DataSource(config.typeOrmStaticConfig);

module.exports = [dataSource];
