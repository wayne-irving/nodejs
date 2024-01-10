const express = require('express');
const mongoose = require('mongoose');
const app = express();
mongoose.set('strictQuery', false);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 3000;

const json = {
    "name": "Wayne Irving",
    "industry": "IT",
    "favoriteColors": [
        "red",
        "orange",
        "black"
    ],
    "favoriteNumbers": [
        5,
        3,
        7
    ],
    "favoritePeople": [
        {
            "name": "Jarrid",
            "relationship": "friend"
        },
        {
            "name": "granny",
            "relationship": "grandparent"
        }
    ]
};

//testing a 2nd json, it failed
/*const hope = {
    Project: "Photography",
    typeOfPhotos: [
        "Tinder",
        "Wedding"
    ]
};
*/

app.get('/', (req, res) => {
    res.send("Welcome!");
});

//testing a 2nd json, it failed
/*app.get('/', (req, res) => {
    res.send({"data1": hope});
})
*/


app.get('/', (req, res) => {
    res.send({"data": json});
})

app.post('/api/customers', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.post('/', (req, res) => {
    res.send('This is a post request!');
});

app.listen(PORT, () => {
    console.log('App listening on port ' + PORT);
})

const start = async() => {
    await mongoose.connect('mongodb+srv://wayneIrving:K2phcA1zKX8g3yAz@cluster0.drmo7dn.mongodb.net/?retryWrites=true&w=majority');

    app.listen(PORT, () => {
        console.log('App listening on port ' + PORT);
    })
};

start();