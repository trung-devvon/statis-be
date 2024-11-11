const router = require("express").Router();

router.get('/', async (req, res) => {
    return res.json({ message: 'Hello'})
})

module.exports = router;