const router = require("express").Router();
const db = require('../models')
const { Op } = require('sequelize');

router.get('/', async (req, res) => {
    try {
        const { keyword } = req.query; // Lấy từ khóa tìm kiếm từ query parameter

        if (!keyword) {
            return res.status(400).json({ message: "Keyword is required" });
        }

        const companies = await db.company.findAll({
            where: {
                [Op.or]: [
                    { taxCode: { [Op.like]: `%${keyword}%` } },
                    { phoneNumber: { [Op.like]: `%${keyword}%` } },
                    { name_normalized: { [Op.like]: `%${keyword}%` } }
                ]
            },
            limit: 10
        });
        if (companies.length === 0) {
            return res.status(404).json({ message: "No companies found matching the keyword" });
        }
        res.status(200).json(companies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while searching for companies" });
    }
})
module.exports = router