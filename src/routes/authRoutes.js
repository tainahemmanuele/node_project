const express = require('express');
const { MongoClient, ObjectID } = require('mongodb');
const authRouter = express.Router();
const debug = require('debug')('app:authRoutes');

function router(){};

module.exports = router;