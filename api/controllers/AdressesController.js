const database = require("../models");

class AdressesController {
    static async getOneAddress(req, res){
        try {
            const addresses = await database.Adresses.findAll();
            return res.status(200).json(addresses);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error', message: error.message });
        }
    }

    static async getAllAddresses(req, res){
        const { id } = req.params;
        try {
            const address = await database.Adresses.findOne({ where: { id: Number(id) } }); 
            if (!address) {
                return res.status(404).json({ error: 'Not Found', message: 'Person not found' });
            }
            return res.status(200).json(address);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error', message: error.message });
        }
    }

    static async createAddress(req, res){
        const newAddress = req.body;
        try {
            const createNewAddress = await database.Adresses.create(newAddress);
            return res.status(200).json(createNewAddress);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error', message: error.message });
        }
    }

    static async changeAddress(req, res){
        const { id } = req.params;
        const newInfo = req.body;
        try {
            await database.Adresses.update(newInfo, { where: { id: Number(id) } });
            const updatedAddress = await database.People.findOne({ where: { id: Number(id) } });
            return res.status(200).json(updatedAddress);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error', message: error.message });
        }
    }

    static async deleteAddress(req, res){
        const { id } = req.params;
        try {
            await database.Adresses.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ message: 'Deletion successful', deletedId: id });
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error', message: error.message });
        }
    }
}

module.exports = AdressesController;
