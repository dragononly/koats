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
const ve=(async (token:string)=>{
    try {
        const  decoded=   jwt.verify(token, process.env.KEY, {
              complete: true
            }); 
           return decoded
      } catch  {
          return false
      }
})

@JsonController()
@Service()
export class ZhixueyunLiveController {
    constructor(private catsService: LiveService, private decService: decService) { }



    //知学云的接口都在这
    //天健直播

    //创建直播
    @Post('zxylive/addlive')
    async zhixueyun_addlive(@Body() data: any ,@HeaderParam("authorization") token: string) {
        if(await ve(token)){
            const cab = await this.catsService.zhixueyun_addlive(data);
            return { data: cab };
        }else{
            return false
        }  
    }

    @Post('zxylive/tokenlogin')
    async zhixueyun_tokenlogin(@HeaderParam("authorization") token: string) {
        const cab:any=await ve(token)
        if(cab){
            let [eid,zhiboid]=[cab?.payload?.eid,cab?.payload?.zhiboid]
            return { data:{eid:eid,zhiboid:zhiboid} };
        }else{
            return false
        }  
        return false
    }

    @Put('zxylive/changlive/:id')
    async zhixueyun_changlive(@Param('id') id: string, @Body() data: any,@HeaderParam("authorization") token: string) {
        if(await ve(token)){
            const cab = await this.catsService.zhixueyun_changlive(id, data);
            return { data: cab };
        }else{
            return false
        }
    }

    @Get('zxylive/zhibolist')
    async zhixueyun_zhibolist(@HeaderParam("authorization") token: string) {
        if(await ve(token)){
            const cab = await this.catsService.zhixueyun_zhibolist();
            return { data: cab };
        }else {
            return false
        }
    }
    @Delete('zxylive/dezhibo/:id')
    async zhixueyun_dezhibo(@Param('id') id: string,@HeaderParam("authorization") token: string) {
        if(await ve(token)){
        const cab = await this.catsService.zhixueyun_dezhibo(id);
        return { data: cab };}else{
            return false
        }
    }

    @Get("zxylive/watch")
    async zhixueyun_watch(@Res() response: any, @QueryParams() data: any,@HeaderParam("authorization") token: string) {
        const cab:any =await ve(token) 
        if(cab){
            return `http://127.0.0.1:3000/#/center?accesstoken=${token}`
            // return `http://cdn.pccpa.cn:9000/#/center?accesstoken=${token}`
            // response.redirect(`/public/zhibo/index.html#/center?urlid=${zhiboid}&id=${eid}`);
           // response.redirect(`http://127.0.0.1:3000/#/center?zhiboid=${zhiboid}&eid=${eid}`)
        }else{
            return false
        }
        
    }

}

