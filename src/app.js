const express = require('express');
const app = express();
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

/*const hope = {
    Project: "Photography",
    typeOfPhotos: [
        "Tinder",
        "Wedding"
    ]
};
*/

app.get('/', (req, res) => {
    res.send("Nervous");
})

/*app.get('/', (req, res) => {
    res.send({"data1": hope});
})
*/


app.get('/', (req, res) => {
    res.send({"data": json});
})

app.post('/', (req, res) => {
    res.send('This is a post request!');
});

app.listen(PORT, () => {
    console.log('App listening on port ' + PORT);
})