const Controller = require('egg').Controller;

class SaleController extends Controller {
  async getSaleList() {
    const res = await this.ctx.service.sale.getSaleList();
    this.ctx.body = res;
  }

  async addSale() { // 添加客户经理信息，如果已存在uid，则更新即可
    const params = this.ctx.request.body;
    const sale = await this.ctx.service.sale.getSaleByUid(params);
    let res = '';
    if (sale.data) {
      res = await this.ctx.service.sale.moidfySale(params);
    } else {
      res = await this.ctx.service.sale.addSale(params);
    }
    this.ctx.body = res;
  }
}

module.exports = SaleController;
