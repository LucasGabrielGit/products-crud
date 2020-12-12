import express from "express";
import cors from "cors";
import routes from "./routes";
import "./database/connection";
import errorHandler from "./errors/handler";

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(errorHandler);
app.listen(3001);
