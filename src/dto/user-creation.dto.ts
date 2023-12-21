import {IsEmail, IsNotEmpty, IsString, Length} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class UserCreationDto {
    @ApiProperty({example: 'user@gmail.com', description: 'Почтовый адрес'})
    @IsString({message: 'Должно быть строкой'})
    @IsEmail({}, {message: 'Некорректные данные'})
    @IsNotEmpty({message: 'Поля не могут быть пустыми'})
    readonly email: string

    @ApiProperty({example: '12345678', description: 'Пароль'})
    @IsString({message: 'Должно быть строкой'})
    @IsNotEmpty({message: 'Поля не могут быть пустыми'})
    @Length(8, 16, {message: 'Пароль должен быть не меньше 8 и не больше 16 символов'})
    readonly password: string
}
