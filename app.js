const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/ping', (req, res) => res.json('pong'));
app.get('/', (req, res) => {
    res.json(
        [
            {name: "Stas", age: 25},
            {name: "Jack", age: 45},
            {name: "Mary", age: 78},
            {name: "Max", age: 18}
        ]
    )
});

app.listen(5000, () => {
    console.log('App listen', 5000);
});
