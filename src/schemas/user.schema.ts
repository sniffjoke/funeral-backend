import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "./role.schema";
import {Type} from "class-transformer";

@Schema({timestamps: true})
export class User {

    @ApiProperty({example: 'user@gmail.com', description: 'Почтовый адрес'})
    @Prop({
        unique: true,
        required: true
    })
    email: string

    @ApiProperty({example: '12345678', description: 'Пароль'})
    @Prop({
        required: true
    })
    password: string

    @ApiProperty({example: 'true', description: 'Забанен пользователь или нет'})
    @Prop({
        default: false
    })
    banned: boolean

    @ApiProperty({example: 'Более не работает', description: 'Причина бана'})
    @Prop({
        default: null
    })
    banReason: string

    // @Prop({type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Role' }]})
    @Prop({default: null})
    @Type(() => Role)
    roles: [Role]

}

export const UserSchema = SchemaFactory.createForClass(User)
