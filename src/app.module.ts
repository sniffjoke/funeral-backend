import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {HistoryItem} from "./schemas/history.schema";
import {HistoryitemsModule} from "./historyitems/historyitems.module";
import { UsersModule } from './users/users.module';
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [
      ConfigModule.forRoot({
          envFilePath: '.env'
      }),
      MongooseModule.forRoot(process.env.DBCONNECT),
      HistoryItem,
      HistoryitemsModule,
      UsersModule
  ],
})
export class AppModule {}
