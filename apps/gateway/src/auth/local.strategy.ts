import { Injectable, GoneException, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';
import { use } from 'passport';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
    constructor(private readonly authService: AuthService) {
        super({ usernameField: 'email' });  
    }

    async validate(email: string, password: string): Promise<any> {
        const emailAddress = email.toLowerCase();
        const user = await this.authService.validateUser(emailAddress, password);
        if (!user) {
            throw new UnauthorizedException();
        }
        return {username: user.username, email: user.email};
    }
}
