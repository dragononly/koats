import { Server } from 'http'
import { print } from 'configs/utils'
import Environment from 'configs/environments'
import createServer from 'configs/application'
import * as bootstrap from 'configs/bootstrap'
import serve from "koa-static2";
import ws from 'ws'

module.exports = (async (): Promise<Server> => {
  try {
    const app = await createServer()

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
