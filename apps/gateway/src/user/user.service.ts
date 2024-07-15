import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../Schemas/User.schema';
import { CreateUserDto } from '../dto/User/create-user.dto';
import { UpdateUserDto } from '../dto/User/update-user.dto';
import { sha256 } from 'js-sha256';
function genSalt(length: number) {
  let saltConcation = '';
  for (let i = 0; i < length; i++) {
    const random = Math.floor(Math.random() * 91) + 33;
    const salt = String.fromCharCode(random);
    saltConcation += salt;
  }
  return saltConcation;
}
@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async create(createUserDto: CreateUserDto) {
    try {
      createUserDto.salt = genSalt(100);
      const saltedpass = createUserDto.password + createUserDto.salt;
      createUserDto.password = sha256(saltedpass);
      const createdUser = new this.userModel(createUserDto);
      return createdUser.save();
    } catch (error) {
      console.log(error);
    }
  }
  async Login(email: string, password: string) {
    try {
      const result = await this.userModel.findOne({
        email: email,
      });
      if (result) {
        return result.password === sha256(password + result.salt)? result : false;
      } else {
        return false;
      }
    } catch (error) {
      return console.log(error);
    }
  }
  async update(username: string, updateUserDto: UpdateUserDto) {
    try {
      const updated = await this.userModel.findOneAndUpdate(
        { username: username },
        updateUserDto
      );
      if (updated) return 'User updated';
      else return 'User not found';
    } catch (error) {
      console.log(error);
    }
  }
  async isEmailAvailable(email: string) {
    try {
      const result = await this.userModel.findOne({ email: email });
      if (!result) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }
  async getUser(email: string): Promise<User | undefined> {
    return this.userModel.findOne({ email }).exec();
}
}
