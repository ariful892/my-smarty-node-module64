const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('My smarty smarty node!!')
});

const users = [
    { id: 1, name: 'sakib', email: 'sakib@gmail.com' },
    { id: 2, name: 'rakib', email: 'rakib@gmail.com' },
    { id: 3, name: 'akib', email: 'akib@gmail.com' },
    { id: 4, name: 'nakib', email: 'nakib@gmail.com' },
    { id: 5, name: 'sarif', email: 'sarif@gmail.com' },
];

app.get('/users', (req, res) => {

    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
    }
    else {
        res.send(users);
    }

});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
});

app.post('/user', (req, res) => {
    console.log('Request: ', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
})

app.listen(port, () => {
    console.log('Listen to port', port)
});

