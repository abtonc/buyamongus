const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
dotenv.config();

app.listen(process.env.PORT);
