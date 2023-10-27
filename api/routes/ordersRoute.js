const { Router } = require('express');
const OrdersController = require('../controllers/OrdersController');

const router = Router();

router.get('/order', OrdersController.getAllOrders);
router.get('/people/:id/order/:id', OrdersController.getOneOrder);
router.post('/order', OrdersController.createOrder);
router.patch('/people/:id/order/:id', OrdersController.changeOrder);
router.delete('/people/:id/order/:id', OrdersController.deleteOrder);

module.exports = router;
