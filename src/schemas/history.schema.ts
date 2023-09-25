import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {FoodItemSchema, Item} from "./foodItem.schema";

@Schema({timestamps: true})

export class HistoryItem {
    @Prop({type: [FoodItemSchema], required: true})

    historyItems: Item[]

}

export const HistoryItemSchema = SchemaFactory.createForClass(HistoryItem)
