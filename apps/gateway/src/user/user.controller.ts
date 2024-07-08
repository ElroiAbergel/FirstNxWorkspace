import { Controller } from '@nestjs/common';
import { UserService } from './user.service'
import { CreateUserDto } from '../dto/User/create-user.dto';
import { UpdateUserDto } from '../dto/User/update-user.dto';
import { Body, Get, Patch, Post, Query } from "@nestjs/common/decorators";
@Controller('user')
export class UserController {
    constructor(private UserService:UserService) { }
    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.UserService.create(createUserDto)
    }
    @Get("login")
    async getUser(@Query('username') username: string ,@Query('password') password: string) {
        return this.UserService.Login(username, password);

    }
    @Get('isUsernameAvailable')
    async findUser(@Query('username') username: string) {
        return this.UserService.isUsernameAvailable(username);
    }
    @Patch('update')
    async updateUser(@Query('username') username: string, @Body() updateUserDto: UpdateUserDto) {
        return this.UserService.update(username, updateUserDto);
    }
    @Patch('delete')
    async deleteUser(@Query('username') username: string) {
        return this.UserService.delete(username);
    }

    
}
