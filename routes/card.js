const express=require("express");
const cartController=require("../controller/card")

const router=express.Router();


router.post("/cart", cartController.createCart);

router.get("/cart",cartController.getCart);

module.exports=router;