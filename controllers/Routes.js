var express = require("express");
var router = express.Router();

// Require Schemas
var Executive = require("./models/Executive");
var Legislative = require("./models/Legislative");
var Organization = require("./models/Organization");
var Parties = require("./models/Parties");