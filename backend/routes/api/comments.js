const express = require('express');
const router = express.Router();
const db = require('../db/models');
const asyncHandler = require('express-async-handler');
const {Comment, User} = db;
