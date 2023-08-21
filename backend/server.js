import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import colors from "colors";
import connectDB from "./config/db.js";
import { RegisterUser } from "./controllers/UserRegistration.js";

const app = express();
const PORT = 5000;
app.use(cors());
app.use(bodyParser.json());
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/registration", RegisterUser);

app.get("/about", (req, res) => {
  res.send("<h1>About World</h1>");
});

app.listen(PORT, () => {
  console.log(`app listening on the port http://localhost:${PORT}/`);
});
