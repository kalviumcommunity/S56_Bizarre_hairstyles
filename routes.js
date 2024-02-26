const express = require('express')
const router = express.Router()


router.get('/get', async (req, res, next) => {
    try {
        res.send({ message: "GET request processed successfully." })
    } catch (error) {
        next(error);
    }
})

router.post('/post', async (req, res, next) => {
    try {
        res.send({ message: "POST request processed successfully." })
    } catch (error) {
        next(error);
    }
})

router.patch('/patch', async (req, res, next) => {
    try {
        res.send({ message: "Patch request processed successfully." })
    } catch (error) {
        next(error);
    }
})

router.delete('/delete', async (req, res, next) => {
    try {
        res.send({ message: "Delete request processed successfully." })
    } catch (error) {
        next(error);
    }
})

module.exports = {router}

