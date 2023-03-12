const {Sequelize} = require('sequelize');

const charModel = require('../models/Character');
const favModel = require('../models/Favorite');
const dotenv = require('dotenv');

dotenv.config();
const {DB_USER , DB_PASSWORD, DB_HOST, DB_NAME} = process.env;

const db = new Sequelize(`postgres//${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
{logging:false});

charModel(db);
favModel(db);

module.exports= {db, ...db.models}