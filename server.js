const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require('cors');
const path = require('path');
// const bodyParser = require('body-parser');
require("dotenv").config();


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

const routes = require('./api/Routes/mainRoutes');
routes(app);

app.use(express.static(path.resolve(__dirname, './frontend/build')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './frontend/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})