import { Router } from "express";
import express from "express";

import authRouter from "./auth";
import userRouter from "./usersRouter";

let rootRouter = Router();

rootRouter.get("/", (req, res) => {
  res.send("Delicioso API is online and running");
});

rootRouter.use("/auth", authRouter);
rootRouter.use("/users", userRouter);

export default rootRouter;
