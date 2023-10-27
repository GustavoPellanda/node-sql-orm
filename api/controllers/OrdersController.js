const database = require("../models");

class OrdersController {
    static async getAllOrders(req, res) {
        try {
            const orders = await database.Orders.findAll();
            return res.status(200).json(orders);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error', message: error.message });
        }
    }

    static async getOneOrder(req, res) {
        const { clientID , orderID } = req.params;
        try {
            const order = await database.Orders.findOne({ where: { personId: Number(clientID), id: Number(orderID) } });
            if (!order) {
                return res.status(404).json({ error: 'Not Found', message: 'Order not found' });
            }
            return res.status(200).json(order);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error', message: error.message });
        }
    }

    static async createOrder(req, res) {
        const newInfo = req.body;
        try {
            const createNewOrder = await database.Orders.create(newInfo);
            return res.status(200).json(createNewOrder);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error', message: error.message });
        }
    }

    static async changeOrder(req, res) {
        const { clientID , orderID } = req.params;
        const newInfo = req.body;
        try {
            await database.Orders.update(newInfo, { where: { personId: Number(clientID), id: Number(orderID) } });
            const order = await database.Orders.findOne({ where: { personId: Number(clientID), id: Number(orderID) } });
            return res.status(200).json(order);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error', message: error.message });
        }
    }

    static async deleteOrder(req, res) {
        const { clientID , orderID } = req.params;
        try {
            await database.Orders.destroy({ where: { personId: Number(clientID), id: Number(orderID) } });
            return res.status(200).json({ message: 'Deletion successful', deletedId: orderID });
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error', message: error.message });
        }
    }
}

module.exports = OrdersController;
