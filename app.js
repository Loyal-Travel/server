if (process.env.NODE_ENV === 'development') require('dotenv').config();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routing = require('./routes');

mongoose
  .connect(MONGO_URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Connected to database ${MONGO_URI}`))
  .catch((err) => console.log(`Fail to connect, err: ${err}`));

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(routing);
// app.use(errHandling) this for error handling
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));