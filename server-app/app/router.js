'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller,
  } = app;
  router.get('/', controller.home.index);
  router.post('/api/msg_board/list', controller.msgBoard.getMsgBoardList);
  router.post('/api/msg_board/add', controller.msgBoard.addMsgBoard);
  router.post('/api/msg_board/modify', controller.msgBoard.moidfyMsgBoard);
  router.post('/api/msg_board/delete', controller.msgBoard.deleteMsgBoard);
  router.post('/api/customer/list', controller.customer.getRecommendList);
  router.post('/api/customer/add', controller.customer.addRecommend);
  router.post('/api/sale/list', controller.sale.getSaleList);
  router.post('/api/sale/add', controller.sale.addSale);
  router.post('/api/message/push', controller.message.pushMessage);
  router.post('/api/message/wxuser', controller.message.wxUser);
};
