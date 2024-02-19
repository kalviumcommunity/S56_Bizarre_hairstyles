const express = require('express');
const app = express();
app.use(express.json());

app.get('/ping' , (req, res) =>{
    res.status(200).send("pong")
})

if (require.main === module) {
    app.listen(3000, (err) => {
        if (err) console.error(err);
        else console.log(`server running on PORT: 3000`);
    });
}

module.exports = app;