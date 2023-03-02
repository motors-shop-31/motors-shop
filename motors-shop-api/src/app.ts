import "reflect-metadata";
import "express-async-errors";
import express from "express";

import cors from "cors";

import GlobalErrorMiddleware from "./Middlewares/GlobalError.middleware";

import userRoutes from "./Router/user.routes";
import loginRoutes from "./Router/login.routes";
import productRoutes from "./Router/product.routes";
import commentsRoutes from "./Router/comments.routes";

const app = express();
app.use(express.json());

app.use(GlobalErrorMiddleware);

app.use(
  cors({
    origin: "*",
  })
);

app.use("/user", userRoutes);
app.use("/comments", commentsRoutes);
app.use("/login", loginRoutes);
app.use("/product", productRoutes);

export default app;
