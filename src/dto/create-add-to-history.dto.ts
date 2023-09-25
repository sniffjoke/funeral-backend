import {IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested} from "class-validator";
import {Type} from "class-transformer";

export class AddToArrayDto {
    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsOptional()
    ingredients?: string

    @IsString()
    @IsNotEmpty()
    weight: string

    @IsNumber()
    @IsNotEmpty()
    amount: number

    @IsNumber()
    @IsNotEmpty()
    cost: number

}

export class CreateArrayDto {
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AddToArrayDto)
    historyItems: AddToArrayDto[]
}
