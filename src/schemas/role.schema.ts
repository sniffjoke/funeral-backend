import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {ApiProperty} from "@nestjs/swagger";

@Schema({timestamps: true})
export class Role {

    @ApiProperty({example: 'ADMIN', description: 'Роль пользователя'})
    @Prop({
        // unique: true,
        required: true
    })
    value: string

    @ApiProperty({example: 'Администратор', description: 'Описание роли'})
    @Prop({
        required: true
    })
    description: string

    // @Prop({type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]})
    // // @Type(() => UserRoles)
    // userRoles: User

}

export const RoleSchema = SchemaFactory.createForClass(Role)
