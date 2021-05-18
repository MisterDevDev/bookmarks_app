const express = require('express');

const app = express();

app.get('/', (req, res)=> res.redirect('/bookmarks'));

app.use('/bookmarks', require('./routes/router.js'))

const Port = 1337;

app.listen(Port, () => {
    console.log(`App listening on port ${Port}`);
})