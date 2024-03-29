const express = require('express')
const router = express.Router()


router.get('/get', async (req, res) => {
    try {
        res.send("Get request processed successfully.")
    } catch (error) {
        next(error);
    }
})

router.post('/post', async (req, res) => {
    try {
        res.send("Post request processed successfully.")
    } catch (error) {
        next(error);
    }
})

router.patch('/patch', async (req, res, next) => {
    try {
        res.send("Patch request processed successfully.")
    } catch (error) {
        next(error);
    }
})

router.delete('/delete', async (req, res, next) => {
    try {
        res.send("Delete request processed successfully.")
    } catch (error) {
        next(error);
    }
})

module.exports = router

