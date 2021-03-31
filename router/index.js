const router = require("express").Router();
const users = require("./users");
const items = require("./items");
const path = require("path");

router.use("/users", users);
router.use("/items", items);
router.all("*", (req, res) => res.sendFile(path + "../build/index.html"));
// 
module.exports = router;
