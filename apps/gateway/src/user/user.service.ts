import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../Schemas/User.schema';
import { CreateUserDto } from '../dto/User/create-user.dto';
import { UpdateUserDto } from '../dto/User/update-user.dto';
@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) { }
    async create(createUserDto: CreateUserDto) {
        try{
        const createdUser = new this.userModel(createUserDto);
        return createdUser.save();
        }
        catch(error){
            console.log(error);
        }
    }
    async Login(username: string, password: string) {
        try {
            const result = await this.userModel.findOne({ username: username, password: password });
            if (result) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (error) {
            return console.log(error);
        }
    }
    async update(username: string, updateUserDto: UpdateUserDto) {
        try {
            const updated = await this.userModel.findOneAndUpdate({ username: username }, updateUserDto);
            if (updated)
                return "User updated";
            else
                return "User not found";
        }
        catch (error) {
            console.log(error);
        }
    }

    async delete(username: string) {
        try {
            const deleted = await this.userModel.findOneAndDelete({ username: username });
            if (deleted)
                return "User deleted";
            else
                return "User not found";
        }
        catch (error) {
            console.log(error);
        }
    }
    async isUsernameAvailable(username: string) {
        try {
            const result = await this.userModel.findOne({ username: username });
            if (!result) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}