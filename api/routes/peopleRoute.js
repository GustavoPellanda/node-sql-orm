const { Router } = require('express');
const PeopleController = require('../controllers/PeopleController');

const router = Router();

router.get('/people', PeopleController.getPeople);
router.get('/people/:id', PeopleController.getPerson);

module.exports = router;