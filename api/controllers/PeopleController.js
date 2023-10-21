const database = require("../models");

class PeopleController {
  static async getPeople(req, res) {
    try {
      const people = await database.People.findAll();
      return res.status(200).json(people);
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
  }

  static async getPerson(req, res) {
    const { id } = req.params; // Ensure id is an int
    try {
      const person = await database.People.findOne({ where: { id: Number(id) } }); // Where the ID of the database is the ID of the req.params
      if (!person) {
        return res.status(404).json({ error: 'Not Found', message: 'Person not found' });
      }
      return res.status(200).json(person);
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
  }

  static async createPerson(req, res) {
    const newPerson = req.body;
    try {
        const createNewPerson = await database.People.create(newPerson);
        return res.status(200).json(createNewPerson);
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
  }

}

module.exports = PeopleController;
