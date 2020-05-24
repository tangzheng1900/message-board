const Service = require('egg').Service;

class saleService extends Service {
  async getSaleList() {
    const res = await this.app.mysql.select('sale');
    return {
      code: 0,
      data: res,
    };
  }

  async getSaleByUid(params) {
    const res = await this.app.mysql.get('sale', { uid: params.uid });
    return {
      code: 0,
      data: res,
    };
  }

  async addSale(params) {
    const res = await this.app.mysql.insert('sale', {
      uid: params.uid,
      saleName: params.saleName,
      salePhone: params.salePhone,
      nickName: params.nickName,
    });
    if (res.affectedRows === 1) {
      return {
        code: 0,
        msg: '保存成功',
      };
    } else {
      return {
        code: -1,
        msg: '保存失败',
      };
    }
  }

  async moidfySale(params) {
    const options = { where: { uid: params.uid } };
    const res = await this.app.mysql.update('sale', {
      uid: params.uid,
      saleName: params.saleName,
      salePhone: params.salePhone,
      nickName: params.nickName,
    }, options);
    if (res.affectedRows === 1) {
      return {
        code: 0,
        msg: '修改成功',
      };
    } else {
      return {
        code: -1,
        msg: '修改失败',
      };
    }
  }
}

module.exports = saleService;
