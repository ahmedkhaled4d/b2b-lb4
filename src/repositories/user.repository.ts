import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {B2BMongoDevDataSource} from '../datasources';
import {User, UserRelations} from '../models';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {
  constructor(
    @inject('datasources.b2bMongoDev') dataSource: B2BMongoDevDataSource,
  ) {
    super(User, dataSource);
  }
}
