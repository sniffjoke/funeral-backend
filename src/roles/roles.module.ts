import {Module} from '@nestjs/common';
import {RolesController} from './roles.controller';
import {RolesService} from './roles.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Role, RoleSchema} from "../schemas/role.schema";
import {User, UserSchema} from "../schemas/user.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Role.name,
                schema: RoleSchema
            },
            {
                name: User.name,
                schema: UserSchema
            }
        ])
    ],
    controllers: [RolesController],
    providers: [RolesService],
    exports: [
        RolesService
    ]
})
export class RolesModule {}
