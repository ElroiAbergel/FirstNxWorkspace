import { Controller, Post, Get, Patch, Body, Query, Request, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '../dto/User/create-user.dto';
import { UpdateUserDto } from '../dto/User/update-user.dto';
import { LocalAuthGuard } from '../auth/local.auth.guard';
import { AuthenticatedGuard } from '../auth/authenticated.guard';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post('/signup')
    async signup(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    login(@Request() req): any {
        return {
            User: req.user,
            msg: 'User logged in',
        };
    }

    @Get('isEmailAvailable')
    async findUser(@Query('email') email: string) {
        return this.userService.isEmailAvailable(email);
    }

    @Patch('update')
    async updateUser(@Query('username') username: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(username, updateUserDto);
    }

    @UseGuards(AuthenticatedGuard)
    @Get('/protected')
    getHello(@Request() req): string {
        return req.user;
    }

    @Get('/logout')
    logout(@Request() req): any {
        req.session.destroy();
        return { msg: 'The user session has ended' };
    }
    
}
