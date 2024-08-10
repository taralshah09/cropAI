const express = require("express");
const app = express();
const port = 3012;
const bodyParser = require("body-parser");

const { GoogleGenerativeAI } = require("@google/generative-ai");

app.use(express.json());
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", __dirname + "/views");

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

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/api", (req, res) => {
  res.render("api", { ans: null }); // Render `api.ejs` with `ans` as null initially
});

app.post("/api", async (req, res) => {
  try {
    const { prompt } = req.body;

    async function run(prompt) {
      const chatSession = model.startChat({
        generationConfig,
        history: [],
      });

      const result = await chatSession.sendMessage(prompt);
      console.log(`Prompt is: ${prompt}`);
      return result.response.text(); // Return the response text
    }

    const ans = await run(prompt); // Await the response from `run`

    res.render("api", { ans }); // Render the same `api.ejs` page with `ans`
  } catch (error) {
    console.log(error);
    res.render("api", {
      ans: "An error occurred while processing your request.",
    }); // Handle error cases
  }
});

app.listen(port, () => {
  console.log(`Server connected on port ${port}`);
});
