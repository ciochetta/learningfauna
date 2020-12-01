const express = require("express");
const router = express.Router();

const app = express();

router.get("/:id", require("./getTask"));

app.use(router);

module.exports = app;
