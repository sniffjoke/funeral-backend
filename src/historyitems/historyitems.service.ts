import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {HistoryItem} from "../schemas/history.schema";
import {Model} from "mongoose";
import {CreateArrayDto} from "../dto/create-add-to-history.dto";

@Injectable()
export class HistoryitemsService {
    constructor(@InjectModel(HistoryItem.name) private historyModel: Model<HistoryItem>) {}

    findAll() {
        return this.historyModel.find()
    }

    async create(createHistoryItems: CreateArrayDto) {
        const newHistoryItems = new this.historyModel(createHistoryItems)
        // await newHistoryItems.$set('author', ...)
        await newHistoryItems.save()
        return newHistoryItems
    }

    async findOne(id: string) {
        return this.historyModel.findById(id)
    }

    async delete(id: string) {
        return this.historyModel.findByIdAndDelete(id)
    }

    // async update(id: string, historyItems: any) {
    //     return this.historyModel.findByIdAndUpdate(id, historyItems)
    // }

}
