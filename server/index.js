const express = require("express");
const app = express();
const port = 3010;
const run = require("./geminiapi");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(express.json());
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", __dirname + "/views");

// require("./geminiapi");
// require("./image");
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/api", (req, res) => {
  res.render("api");
});
const response = "";
const { GoogleAIFileManager } = require("@google/generative-ai/server");
const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = "AIzaSyBed5H9wfqmBYLvdhyhymvYxU3pKWbY-3s";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};
app.post("/api", async (req, res) => {
  try {
    const { prompt } = req.body;

    async function run(prompt) {
      const chatSession = model.startChat({
        generationConfig,
        // safetySettings: Adjust safety settings
        // See https://ai.google.dev/gemini-api/docs/safety-settings
        history: [],
      });

      const result = await chatSession.sendMessage(`${prompt}`);
      console.log(`prompt is ${prompt}`);
      console.log(result.response.text());
    }
    response = await run(prompt);
    res.render("/api", { ans: response });
  } catch (error) {
    console.log(error);
  }
});
app.listen(port, (req, res) => {
  console.log("server connected");
});
