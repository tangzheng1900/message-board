const Controller = require('egg').Controller;

class CustomerController extends Controller {
    async getRecommendList() {
        const res = await this.ctx.service.customer.getRecommendList()
        this.ctx.body = res
    }
    async addRecommend() {
        let params = this.ctx.request.body
        const res = await this.ctx.service.customer.addRecommend(params)
        this.ctx.body = res
    }
}
module.exports = CustomerController
