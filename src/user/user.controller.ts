import {
    Body,
    Controller,
    Get,
    Param,
    Post,
  } from '@nestjs/common';
  import { CreateUserDto } from './dtos/createUser.dto';
  import { ReturnUserDto } from './dtos/returnUser.dto';
  import { UserEntity } from './entities/user.entity';
  import { UserService } from './user.service';
  
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
  
    @Post('/admin')
    async createAdmin(@Body() createUser: CreateUserDto): Promise<UserEntity> {
      return this.userService.createUser(createUser);
    }
  
    @Post()
    async createUser(@Body() createUser: CreateUserDto): Promise<UserEntity> {
      return this.userService.createUser(createUser);
    }
  
    @Get('/all')
    async getAllUser(): Promise<ReturnUserDto[]> {
      return (await this.userService.getAllUser()).map(
        (userEntity) => new ReturnUserDto(userEntity),
      );
    }
  
    @Get('/:userId')
    async getUserById(@Param('userId') userId: string): Promise<ReturnUserDto> {
      return new ReturnUserDto(
        await this.userService.findUserById(userId),
      );
    }
  
}