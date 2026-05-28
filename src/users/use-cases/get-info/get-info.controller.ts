import { Controller, Get, Request } from "@nestjs/common";
import { FindUserByIdService } from "../find-by-id/find-by-id.service";

@Controller('user')
export class GetUserInfoController {
    constructor(
        private readonly finduserById: FindUserByIdService
    ) { }

    @Get('get-info')
    async find(
        @Request() request: any
    )
    {
        console.log(request)
        return await this.finduserById.execute(request.user.id);
    }
}