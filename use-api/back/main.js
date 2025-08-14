import express from "express";
import cors from "cors";

const advices = [
  "It does not matter how slowly you go as long as you do not stop.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "You have power over your mind - not outside events. Realize this, and you will find strength.",
  "The only way to do great work is to love what you do.",
  "Believe you can and you are halfway there.",
];

const app = express();

app.use(cors());

app.get("/", (_req, res) => {
  const randomIndex = Math.floor(Math.random() * advices.length);
  const randomAdvice = advices[randomIndex];
  res.status(200).json({ advice: randomAdvice });
});

app.listen(3000);
