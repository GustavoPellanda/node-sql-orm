const { Router } = require('express');
const OrdersController = require('../controllers/OrdersController');

const router = Router();

router.get('/order', OrdersController.getAllOrders);
router.get('/people/:clientID/order/:orderID', OrdersController.getOneOrder);
router.post('/order', OrdersController.createOrder);
router.patch('/people/:clientID/order/:orderID', OrdersController.changeOrder);
router.delete('/people/:clientID/order/:orderID', OrdersController.deleteOrder);

module.exports = router;
