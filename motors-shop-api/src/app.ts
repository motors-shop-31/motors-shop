import "reflect-metadata";
import "express-async-errors";
import express from "express";

import GlobalErrorMiddleware from "./Middlewares/GlobalError.middleware";

const app = express();
app.use(express.json());

app.use("/teste", (resp, res) => {
  return res.status(201).json({ ok: "tudo ok" });
});

app.use(GlobalErrorMiddleware);

export default app;
