const {Sequelize} = require('sequelize');
require('dotenv').config();

const charModel = require('../models/Character');
const favModel = require('../models/Favorite');


const {DB_USER , DB_PASSWORD, DB_HOST, DB_NAME} = process.env;

const db = new Sequelize(`postgres//${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
{logging:false, native: false});

charModel(db);
favModel(db);

module.exports= {db, ...db.models}