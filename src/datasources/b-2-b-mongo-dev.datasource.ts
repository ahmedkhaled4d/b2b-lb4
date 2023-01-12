import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'b2bMongoDev',
  connector: 'mongodb',
  url: 'mongodb+srv://development:12345@cluster0.g0srsnx.mongodb.net/b2b',
  host: 'cluster0.g0srsnx.mongodb.net',
  port: 27017,
  user: 'development',
  password: '12345',
  database: 'b2b',
  useNewUrlParser: true,
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class B2BMongoDevDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'b2bMongoDev';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.b2bMongoDev', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
