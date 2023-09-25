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

@Controller('history')
export class HistoryitemsController {
    constructor(private historyitemsService: HistoryitemsService) {}

    @Get()
    findAll() {
        return this.historyitemsService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const historyItem = await this.historyitemsService.findOne(id)
        if (!historyItem) throw new NotFoundException('Ордер с данным id не существует')
        return historyItem
    }

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

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id: string) {
        const historyItem = await this.historyitemsService.delete(id)
        if (!historyItem) throw new NotFoundException('Ордер с данным id не существует')
        return historyItem
    }

}
