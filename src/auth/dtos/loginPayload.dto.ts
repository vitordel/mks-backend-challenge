import { UserEntity } from '../../user/entities/user.entity';

export class LoginPayload {
  id: string;

  constructor(user: UserEntity) {
    this.id = user.id;
  }
}