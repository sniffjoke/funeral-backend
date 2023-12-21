import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {User} from "../schemas/user.schema";
import {InjectModel} from "@nestjs/mongoose";
import {UserCreationDto} from "../dto/user-creation.dto";
import {Model} from "mongoose";
import {RolesService} from "../roles/roles.service";
import {AddRoleDto} from "../dto/add-role.dto";
import {BanUserDto} from "../dto/ban-user.dto";

@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private userRepository: Model<User>, private roleService: RolesService) {
    }

    async createUser(dto: UserCreationDto) {
        const user = new this.userRepository(dto)
        const role = await this.roleService.getRoleByValue('USER')
        await user.$set('roles', [role])
        // user.roles = [role]
        // await user.roles.push(role)
        return user.save()
    }

    async getAllUsers() {
        const users = await this.userRepository.find()
        return users
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({email})
        return user
    }

    async addRole(dto: AddRoleDto) {
        const user = await this.userRepository.findById(dto.userId)
        const role = await this.roleService.getRoleByValue(dto.value)
        if (role && user) {
            // await user.updateOne({_id: dto.userId}, {
            //     $set:{
            //         "roles.0.value": dto.value
            //     }
            // })
            await user.$set({
                "roles.0": role
            })
            await user.save()
            return dto
        }

        throw new HttpException('Пользователь или роль не найдены', HttpStatus.NOT_FOUND)
    }

    async ban(dto: BanUserDto) {
        const user = await this.userRepository.findById(dto.userId)
        if (!user) {
            throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND)
        }
        // await user.$set('banned', 'true')
        // await user.$set('banReason', dto.banReason)
        user.banned = true
        user.banReason = dto.banReason
        await user.save()
        return user
    }
}
