import { Server } from 'http'
import { print } from 'configs/utils'
import Environment from 'configs/environments'
import createServer from 'configs/application'
import * as bootstrap from 'configs/bootstrap'
import serve from "koa-static2";
import ws from 'ws'
// import koaJwt from 'koa-jwt'
module.exports = (async (): Promise<Server> => {
  try {
    const app = await createServer()
  //路由权限控制 除了path里的路径不需要验证token 其他都要
  // app.use(
  //   koaJwt({
  //       secret: process.env.KEY
  //   }).unless({
  //       path: [/^\/login/, /^\/register/,/^\/public/,/^\/live/,/^\/auto/,/^\/openapi/]
  //   })
  // );
 

    app.use(serve("public", __dirname + "/public"));
    // let _server = app.listen(3000);  // start

    // _server.close()

    let server = app.listen(Environment.port, () => {
      print.log(
        `server listening on ${Environment.port}, in ${Environment.identity} mode.`,
      )
      bootstrap.after()
    })

    const wss = new ws.Server({ server })
    wss.on('connection', function connection(ws) {
      ws.on('message', function incoming(message: any) {
        //to string
        message = message.toString()
        // 广播消息给所有客户端
        wss.clients.forEach(function each(client) {
          client.send(message);
        });
      })

    })

    return
  } catch (e) {
    console.log(e)
  }
})()
