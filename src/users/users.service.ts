import { Injectable } from '@nestjs/common';
import {User} from "../schemas/user.schema";
import {InjectModel} from "@nestjs/mongoose";
import {UserCreationDto} from "../dto/user-creation.dto";
import {Model} from "mongoose";

@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private userRepository: Model<User>) {}

    async createUser(dto: UserCreationDto) {
        const user = new this.userRepository(dto)
        return user.save()
    }

    async getAllUsers() {
        const users = await this.userRepository.find()
        return users
    }

}
