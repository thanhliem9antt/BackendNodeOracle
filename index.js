import express from "express";
import cors from "cors";
import getConnection from "./src/config/db.js";
import bodyParser from "body-parser";
import morgan from "morgan";
import routes from "./src/routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("combined"));
routes(app);

if (getConnection) {
  console.log("Database connection function imported successfully");
}

console.log("Starting server...");


app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});