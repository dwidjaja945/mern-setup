const express = require('express');
const PORT = process.env.PORT || 9000;

const app = express();

app.get('/', function(req, res) {
    res.send('<h1>App is working</h1>');
});




app.listen(PORT, () => {
    console.log('Server listening on port: ' , PORT);
}).on('error', (err) => {
    console.log('Server Error: ', err.message);
    console.log('Do you already have a server running on PORT: ' + PORT + '?');
});