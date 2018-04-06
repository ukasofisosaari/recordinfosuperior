'use strict';
const util = require("util");
const fs = require("fs");
const assert = require("assert");
const jsonConfig = JSON.parse(fs.readFileSync("./config/config.json"));
const conString = util.format("postgresql://%s:%s@%s:5432/ris",
    jsonConfig.db_username,
    jsonConfig.db_pwd,
    jsonConfig.db_url
);
exports.conString = conString;





