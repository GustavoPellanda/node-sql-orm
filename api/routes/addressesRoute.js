const { Router } = require('express');
const AddressesController = require('../controllers/AddressesController');

router.get('/address', AddressesController.getOneAddress);
router.get('/address/:id', AddressesController.getAllAddresses);
router.post('/address', AddressesController.createAddress);
router.get('/address/:id', AddressesController.changeAddress);
router.get('/address/:id', AddressesController.deleteAddress);

const router = Router();

module.exports = router;
