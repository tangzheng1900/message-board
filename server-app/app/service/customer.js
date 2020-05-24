const Service = require('egg').Service;

class customerService extends Service {
  async getRecommendList() {
    const res = await this.app.mysql.select('recommend');
    return {
      code: 0,
      data: res
    };
  }

  async addRecommend(params) {
    const res = await this.app.mysql.insert('recommend', {
      uid: params.uid,
      userName: params.userName,
      userPhone: params.userPhone,
      baseFee: params.baseFee,
      totalFee: params.totalFee,
      networking: params.networking,
      watchDog: params.watchDog,
      doorbell: params.doorbell,
      recommend: params.recommend,
    });
    if (res.affectedRows === 1) {
      return {
        code: 0,
        msg: '保存成功'
      };
    } else {
      return {
        code: -1,
        msg: '保存失败'
      };
    }
  }
}

module.exports = customerService;
