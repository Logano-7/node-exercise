import express from "express";
import db from "../mockdb/index";

const router = express.Router();

router.get("/:id?", async (req, res, next) => {
  try {
    console.log("this is a get request");
    const { id } = req.params;
    let data;
    if (id) {
      data = await db.getOne(id);
    } else {
      data = await db.getAll();
    }
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  console.log("this is a post request");
  try {
    const newUser = req.body;
    const data = await db.add(newUser);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  console.log("this is a put request");
  try {
    const { id } = req.params;
    const updatedUser = req.body;
    const data = await db.update(id, updatedUser);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  console.log("this is a delete request");
  try {
    const { id } = req.params;
    const data = await db.remove(id);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

export default router;
