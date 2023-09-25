import {Document} from "mongoose";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

@Schema({_id: true})
export class Item extends Document {

    @Prop({
        unique:true,
        required: true
    })
    title: string

    @Prop({
        default: '',
        trim: true
    })
    ingredients: string

    @Prop({
        required: true
    })
    weight: string

    @Prop({
        required: true
    })
    amount: number

    @Prop({
        required: true
    })
    cost: number
}

export const FoodItemSchema = SchemaFactory.createForClass(Item)
