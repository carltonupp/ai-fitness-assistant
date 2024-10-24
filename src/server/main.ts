import express from "express";
import ViteExpress from "vite-express";
import { MacrosRequestBody } from "./models.js";
import { getDiet } from "./openAI.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json())

app.post("/get-diet", async (req, res) => {
  const macros = req.body as MacrosRequestBody;
  
  const mealPlan = await getDiet(macros);

  res.json(mealPlan);
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
