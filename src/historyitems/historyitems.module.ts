import {Module} from '@nestjs/common';
import {HistoryitemsController} from './historyitems.controller';
import {HistoryitemsService} from './historyitems.service';
import {MongooseModule} from "@nestjs/mongoose";
import {HistoryItem, HistoryItemSchema} from "../schemas/history.schema";
import {User, UserSchema} from "../schemas/user.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: HistoryItem.name,
                schema: HistoryItemSchema
            },
            {
                name: User.name,
                schema: UserSchema
            }
        ])
    ],
    controllers: [HistoryitemsController],
    providers: [HistoryitemsService]
})
export class HistoryitemsModule {
}
