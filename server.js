const express = require("express");

const body_parser = require("body-parser");

const router = express.Router();

const app = express();

router.post("/task", require("./insertTask"));
router.delete("/:id", require("./deleteTask"));
router.get("/:id", require("./getTask"));

app.use(body_parser.json());

app.use(router);

module.exports = app;
