import { RequestHolder } from './requestHolder';
import { UserController } from './user.controller';
import { DummyUserController } from './dummy-user.controller';

export class Api extends RequestHolder {
  public userController = new UserController(this.request);
  public dummyUserController = new DummyUserController(this.request);
}
