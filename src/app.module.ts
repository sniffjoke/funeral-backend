import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {HistoryItem} from "./schemas/history.schema";
import {HistoryitemsModule} from "./historyitems/historyitems.module";
import { UsersModule } from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import * as process from "process";
import {User} from "./schemas/user.schema";
import { RolesModule } from './roles/roles.module';
import {Role} from "./schemas/role.schema";
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
      ConfigModule.forRoot({
          envFilePath: `.${process.env.NODE_ENV}.env`
      }),
      MongooseModule.forRoot(process.env.DBCONNECT),
      HistoryItem,
      HistoryitemsModule,
      UsersModule,
      User,
      RolesModule,
      Role,
      AuthModule
  ],
})
export class AppModule {}
