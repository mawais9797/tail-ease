import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { RegisterUser, userLogin } from "./controllers/UserRegistration.js";

const app = express();
const PORT = 5001;
app.use(cors());
app.use(bodyParser.json());
dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/user/registration", RegisterUser);

app.post("/user/login", userLogin);

app.get("/about", (req, res) => {
  res.send("<h1>About World</h1>");
});

app.listen(PORT, () => {
  console.log(`app listening on the port http://localhost:${PORT}/`);
});
