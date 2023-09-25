import { Module } from '@nestjs/common';
import { HistoryitemsController } from './historyitems.controller';
import { HistoryitemsService } from './historyitems.service';
import {MongooseModule} from "@nestjs/mongoose";
import {HistoryItem, HistoryItemSchema} from "../schemas/history.schema";

@Module({
  imports: [
      MongooseModule.forFeature([
        {
          name: HistoryItem.name,
          schema: HistoryItemSchema
        }
      ])
  ],
  controllers: [HistoryitemsController],
  providers: [HistoryitemsService]
})
export class HistoryitemsModule {}
