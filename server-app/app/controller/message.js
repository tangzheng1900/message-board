const Controller = require('egg').Controller;
const appToken = 'AT_GND5DX81k9aDK4DrdpPjtI5gO00jKIg2'; // 在wxPusher注册的应用

class MessageController extends Controller {
  async pushMessage() {
    const params = this.ctx.request.body;
    const { uids, summary, content } = params;
    const pushUrl = 'http://wxpusher.zjiecode.com/api/send/message'; // 微信推送的服务地址
    const contentType = 2;
    const message = {
      appToken,
      contentType,
      summary,
      content,
      uids,
    };
    const options = {
      method: 'POST',
      data: message,
      dataType: 'json',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    };
    const res = await this.ctx.curl(pushUrl, options);
    if (res.data.data && res.data.data[0] && res.data.data[0].code === 1000) {
      this.ctx.body = {
        code: 0,
        msg: '推送成功!',
      };
    } else {
      this.ctx.body = {
        code: -1,
        msg: '推送失败!',
      };
    }
  }
  async wxUser() {
    const params = this.ctx.request.body;
    const { uid } = params;
    const url = `http://wxpusher.zjiecode.com/api/fun/wxuser?appToken=${appToken}&uid=${uid}`; // 微信推送的服务地址
    const res = await this.ctx.curl(url);
    this.ctx.body = JSON.parse(res.data.toString());
  }
}

module.exports = MessageController;
