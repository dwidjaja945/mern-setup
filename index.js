const express = require('express');
const cors = require("cors");
const PORT = process.env.PORT || 9000;

const app = express();

//This allows any computer/server to access my server. 
//NOT to use in production
app.use(cors());

app.get('/user-data', (req, res) => {
    const user = {
        name: 'Dylan Widjaja',
        email: 'dylan@dylan.com'
    };
    res.send(user);
});

app.get('/', function(req, res) {
    res.send('<h1>App is working</h1>');
});

app.listen(PORT, () => {
    console.log('Server listening on port: ' , PORT);
}).on('error', (err) => {
    console.log('Server Error: ', err.message);
    console.log('Do you already have a server running on PORT: ' + PORT + '?');
});