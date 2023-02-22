import "reflect-metadata";
import "express-async-errors";
import express from "express";

import GlobalErrorMiddleware from "./Middlewares/GlobalError.middleware";

import userRoutes from "./Router/user.routes";
import loginRoutes from "./Router/login.routes";
import productRoutes from "./Router/product.routes";

const app = express();
app.use(express.json());

app.use(GlobalErrorMiddleware);

app.use("/user", userRoutes);
app.use("/login", loginRoutes);
app.use("/product", productRoutes);

export default app;
