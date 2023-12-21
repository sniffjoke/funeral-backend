import {IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";
import {Type} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../schemas/user.schema";
import mongoose from "mongoose";

export class AddToArrayDto {
    @ApiProperty({example: 'Салат с копченым цыпленком', description: 'Название блюда'})
    @IsString()
    @IsNotEmpty()
    title: string

    @ApiProperty({example: '(Копченое филе цыплят, свежий огурец, помидор свежий, оливки, салатные листья, овощная пасировка(морковь, лук, перец)', description: 'Состав блюда (если есть)'})
    @IsString()
    @IsOptional()
    ingredients: string

    @ApiProperty({example: '125(г, шт, л)', description: 'Количественный параметр блюда'})
    @IsString()
    @IsNotEmpty()
    weight: string

    @ApiProperty({example: '10', description: 'Количество порций'})
    @IsNumber()
    @IsNotEmpty()
    amount: number

    @ApiProperty({example: '3.8', description: 'Цена одной порции'})
    @IsNumber()
    @IsNotEmpty()
    cost: number

}

export class CreateArrayDto {
    // @ApiProperty({example: '[]', description: 'список из нескольких блюд с указанием количества порций, цены и т.д.'})
    // @IsArray()
    // @ValidateNested({ each: true })
    @Type(() => AddToArrayDto)
    readonly historyItems: AddToArrayDto[]
    @Type(() => User)
    author: mongoose.Schema.Types.ObjectId
}
