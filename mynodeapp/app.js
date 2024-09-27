// app.js
const express = require('express');
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//     res.send('hello, GET request!');
// });

app.use(express.json());

app.post('/submit', (req, res) => {
    const { name } = req.body;
    res.send(`hello, ${name}`);
});
app.use(express.static('publi'));

app.listen(port, () => {
    console.log('Server running at http://localhost:3000');
});

