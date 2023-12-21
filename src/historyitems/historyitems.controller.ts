import {
    Body,
    ConflictException,
    Controller,
    Delete,
    Get,
    HttpCode,
    NotFoundException,
    Param,
    Post
} from '@nestjs/common';
import {HistoryitemsService} from "./historyitems.service";
import {CreateArrayDto} from "../dto/create-add-to-history.dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {HistoryItem} from "../schemas/history.schema";

@ApiTags('История заказов')
@Controller('history')
export class HistoryitemsController {
    constructor(private historyitemsService: HistoryitemsService,
    ) {
    }

    @ApiOperation({summary: 'Получить список всех заказов за все время'})
    @ApiResponse({status: 200, type: HistoryItem})
    @Get()
    findAll() {
        return this.historyitemsService.findAll()
    }

    @ApiOperation({summary: 'Получить один конкретный заказ'})
    @ApiResponse({status: 200, type: HistoryItem})
    @Get(':id')
    async findOne(@Param('id') id: string) {
        const historyItem = await this.historyitemsService.findOne(id)
        if (!historyItem) throw new NotFoundException('Ордер с данным id не существует')
        return historyItem
    }

    @ApiOperation({summary: 'Добавить ордер к списку заказов'})
    @ApiResponse({status: 201, type: HistoryItem})
    @Post()
    async create(@Body() body: CreateArrayDto) {
        try {
            return await this.historyitemsService.create(body)
        } catch (e) {
            if (e.code === 11000) {
                throw new ConflictException('Данный ордер уже существует')
            }
            throw e
        }
    }

    @ApiOperation({summary: 'Удалить один конкретный заказ'})
    @ApiResponse({status: 204, type: HistoryItem})
    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id: string) {
        const historyItem = await this.historyitemsService.delete(id)
        if (!historyItem) throw new NotFoundException('Ордер с данным id не существует')
        return historyItem
    }

}
