import express from "express";
// TODO: import router from users.route
import userRouter from "./users.route.js";
import productRouter from "./products.route.js";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("working");
});

router.use("/users", userRouter);
router.use("/products", productRouter);

// TODO: use the imported router to handle all routes matching "/users"

export default router;
