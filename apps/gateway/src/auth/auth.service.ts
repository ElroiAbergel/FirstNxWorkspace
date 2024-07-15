import { Injectable, NotAcceptableException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { sha256 } from 'js-sha256';
@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) {}

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userService.getUser(email);
        if (!user) {
            throw new NotAcceptableException('Could not find the user');
        }
        
        const passwordValid = user.password === sha256(password + user.salt) ? true : false;

        if (user && passwordValid) {
            return {username: user.username, email: user.email};
        }
        
        return null;
    }
}
