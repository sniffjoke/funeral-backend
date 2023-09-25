import {IsNotEmpty, IsString} from "class-validator";

export class UserCreationDto {
    @IsString()
    @IsNotEmpty()
    readonly email: string

    @IsNotEmpty()
    readonly password: string
}
