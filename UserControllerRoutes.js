import express from "express";

const router =  express.Router()
import { creates, deletes, finds, update } from "./UserController.js";
import pagination from "./pagination.js";




router.post("/create/",creates);
router.post("/find/",finds);
router.post("/update/",update);
router.post("/delete/",deletes);
router.get("/pagination",pagination)

export default router;