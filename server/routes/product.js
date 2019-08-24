const express = require("express");
const router = express.Router();

// Most of these requests require the user to be an admin
const {
    create,
    productById,
    read,
    remove,
    update
} = require("../controllers/product");

const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");

router.get("/product/:productId", read);

router.post("/product/create/:userId", requireSignin, isAuth, isAdmin, create);

router.delete(
    "/product/:productId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    remove
);

router.put(
    "/product/:productId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    update
);

router.param("userId", userById);
router.param("productId", productById);

module.exports = router;