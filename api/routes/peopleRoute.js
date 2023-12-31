const { Router } = require('express');
const PeopleController = require('../controllers/PeopleController');

const router = Router();

router.get('/people', PeopleController.getPeople);
router.get('/people/:id', PeopleController.getPerson);
router.post('/people', PeopleController.createPerson);
router.patch('/people/:id', PeopleController.updatePerson);
router.delete('/people/:id', PeopleController.deletePerson);

module.exports = router;
