const Controller = require('egg').Controller;

class MessageController extends Controller {
  async pushMessage() {
    const params = this.ctx.request.body;
    const { uids, summary, content } = params;
    const pushUrl = 'http://wxpusher.zjiecode.com/api/send/message'; // 微信推送的服务地址
    const appToken = 'AT_GND5DX81k9aDK4DrdpPjtI5gO00jKIg2';
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
    console.log('options=====', options);
    const res = await this.ctx.curl(pushUrl, options);
    console.log('res=====', res)
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
}

module.exports = MessageController;
