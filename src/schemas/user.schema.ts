// import {Document} from "mongoose";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

@Schema({timestamps: true})
export class User {

    @Prop({
        unique: true,
        required: true
    })
    email: string

    @Prop({
        required: true
    })
    password: string

    @Prop({
        default: false
    })
    banned: boolean

    @Prop({
        default: null
    })
    banReason: string

}

export const UserSchema = SchemaFactory.createForClass(User)
