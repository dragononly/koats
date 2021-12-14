import {
    BadRequestError,
    Post,
    JsonController,
    BodyParam,
    Get,
    Ctx,
    Req,
    QueryParams,
    Param,
    Body,
    Redirect,
    Res,
    Put,
    Delete,
    HeaderParam
} from 'routing-controllers'
import Request from "koa"
import { LiveService } from '../../services'
import { decService } from '../../services/tools/dec.service'
import { Service } from 'typedi'
import { Md5 } from 'ts-md5/dist/md5';
import * as jwt from 'jsonwebtoken';


@JsonController()
@Service()
export class OpenapiController {
    constructor(private catsService: LiveService, private decService: decService) { }
    //知学云的接口都在这
    @Post('openapi/accesstoken')
    async zxy_accesstoken(@Body() data: any ) {
        const secret = process.env.KEY;
        if(data.appid=="tj73325e554f56eb05" && data.appkey=="f778ae2021e0f8e98e5ac76fe00e28b0"){
            const payload = {zhiboid:data.zhiboid, eid:data.eid};
            const token = jwt.sign(payload, secret, { expiresIn:  '12h' });
            return { data: token };
        }else{
            return 'appid或者key错误'
        }
    }

  

}

