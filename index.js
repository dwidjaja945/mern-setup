const express = require('express');
const cors = require("cors");
const PORT = process.env.PORT || 9000;

const app = express();

//This allows any computer/server to access my server. 
//NOT to use in production
app.use(cors());

app.post('/api/send-data', (req, res) => {
    console.log( "data send: " , req.body );
    res.send({
        success: true,
        mirror: req.body
    });
});

app.get('/api/user-data', (req, res) => {
    const user = {
        name: 'Dylan Widjaja',
        email: 'dylan@dylan.com'
    };
    res.send(user);
});

app.get('/api/get-article', (req, res) => {
    const article = {
        title: 'Some Article',
        author: 'Rob Roy',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cumque molestias ipsam, culpa accusantium nesciunt sint enim mollitia iure quia eaque beatae voluptatum natus itaque fugiat corporis dolor voluptas ducimus tempore esse repellendus? Rerum incidunt, quia ex reiciendis pariatur adipisci dolor ?'
    }
    res.send(article);
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