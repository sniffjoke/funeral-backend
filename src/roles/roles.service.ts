import { Injectable } from '@nestjs/common';
import {CreateRoleDto} from "../dto/create-role.dto";
import {InjectModel} from "@nestjs/mongoose";
import {Role} from "../schemas/role.schema";
import {Model} from "mongoose";

@Injectable()
export class RolesService {

    constructor(@InjectModel(Role.name) private roleRepository: Model<Role>) {}

    async createRole(dto: CreateRoleDto) {
        const role = new this.roleRepository(dto)
        return role.save()
    }

    async getRoleByValue(value: string) {
        return await this.roleRepository.findOne({value}).exec()
    }

}
