import express from "express";
import { deleteUser, getUser, newUser, updateUser } from "../controllers/userControllers.js";

const router = express.Router();

router.post("/crud", newUser);
router.get("/allusers", getUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);


export default router;
