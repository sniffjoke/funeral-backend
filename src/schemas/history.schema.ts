import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {FoodItemSchema, Item} from "./foodItem.schema";
import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";
import mongoose from "mongoose";
import {User} from "./user.schema";

@Schema({timestamps: true})

export class HistoryItem {
    @ApiProperty({example: '[]', description: 'список из нескольких блюд с указанием количества порций, цены и т.д.'})
    @Prop({type: [FoodItemSchema], required: true})
    historyItems: Item[]

    @Prop({type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]})
    // @Prop({default: null})
    @Type(() => User)
    author: User

}

export const HistoryItemSchema = SchemaFactory.createForClass(HistoryItem)
