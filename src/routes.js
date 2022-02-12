const router = require("express").Router();

const Cookbook = require("@controller/Cookbook");
const User = require("@controller/User");
const Category = require("@controller/Category");

// Method Cookbook
router.get("/cookbook", Cookbook.find);

// Methods User
router.get("/users", User.find);
router.post("/finduser", User.findOne);
router.post("/insertuser", User.postUser);
router.post("/categories", Category.find);

module.exports = router;
