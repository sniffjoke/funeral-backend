import {Body, Controller, Get, Post} from '@nestjs/common';
import {UserCreationDto} from "../dto/user-creation.dto";
import {UsersService} from "./users.service";

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Post()
    create(@Body() userDto: UserCreationDto) {
        return this.usersService.createUser(userDto)
    }

    @Get()
    getAll() {
        return this.usersService.getAllUsers()
    }

}
