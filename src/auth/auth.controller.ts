import {Body, Controller, Post} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {UserCreationDto} from "../dto/user-creation.dto";
import {AuthService} from "./auth.service";

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('/login')
    login(@Body() userDto: UserCreationDto) {
        return this.authService.login(userDto)
    }

    @Post('/registration')
    registration(@Body() userDto: UserCreationDto) {
        return this.authService.registration(userDto)
    }

}
