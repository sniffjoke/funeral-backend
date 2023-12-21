import {Document} from "mongoose";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {ApiProperty} from "@nestjs/swagger";

@Schema({_id: true})
export class Item extends Document {

    @ApiProperty({example: 'Салат с копченым цыпленком', description: 'Название блюда'})
    @Prop({
        // unique:true,
        required: true
    })
    title: string

    @ApiProperty({example: '(Копченое филе цыплят, свежий огурец, помидор свежий, оливки, салатные листья, овощная пасировка(морковь, лук, перец)', description: 'Состав блюда (если есть)'})
    @Prop({
        default: '',
        trim: true
    })
    ingredients: string

    @ApiProperty({example: '125(г, шт, л)', description: 'Количественный параметр блюда'})
    @Prop({
        required: true
    })
    weight: string

    @ApiProperty({example: '10', description: 'Количество порций'})
    @Prop({
        required: true
    })
    amount: number

    @ApiProperty({example: '3.8', description: 'Цена одной порции'})
    @Prop({
        required: true
    })
    cost: number
}

export const FoodItemSchema = SchemaFactory.createForClass(Item)
