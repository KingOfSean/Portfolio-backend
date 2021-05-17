require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const SECRET = process.env.SECRET_KEY;
const app = express();
const PORT = process.env.PORT || 9090;
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.body)
    next();
});
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});
mongoose.connection.once('connected', () => console.log('What a time to be alive!'));
app.use('/projects', require('./Controllers/projectsController'));








app.listen(PORT, () => console.log("I need me some Jesus in my life Amen!: ", PORT))