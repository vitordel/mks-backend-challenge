import {
    BadGatewayException,
    BadRequestException,
    Injectable,
    NotFoundException,
  } from '@nestjs/common';
  import { InjectRepository } from '@nestjs/typeorm';
  import { createPasswordHashed, validatePassword } from '../utils/password';
  import { Repository } from 'typeorm';
  import { CreateUserDto } from './dtos/createUser.dto';
  import { UserEntity } from './entities/user.entity';
  
  @Injectable()
  export class UserService {
    constructor(
      @InjectRepository(UserEntity)
      private readonly userRepository: Repository<UserEntity>,
    ) {}
  
    async createUser(
      createUserDto: CreateUserDto,
      userType?: number,
    ): Promise<UserEntity> {
      const passwordHashed = await createPasswordHashed(createUserDto.password);
  
      return this.userRepository.save({
        ...createUserDto,
        password: passwordHashed,
      });
    }
  
    async getAllUser(): Promise<UserEntity[]> {
      return this.userRepository.find();
    }
  
    async findUserById(userId: string): Promise<UserEntity> {
      const user = await this.userRepository.findOne({
        where: {
          id: userId,
        },
      });
  
      if (!user) {
        throw new NotFoundException(`UserId: ${userId} Not Found`);
      }
  
      return user;
    }

    async findUserByEmail(email: string): Promise<UserEntity> {
        const user = await this.userRepository.findOne({
          where: {
            email,
          },
        });
    
        if (!user) {
          throw new NotFoundException(`Email: ${email} Not Found`);
        }
    
        return user;
      }
  
}