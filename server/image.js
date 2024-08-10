const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
const genAI = new GoogleGenerativeAI("AIzaSyBed5H9wfqmBYLvdhyhymvYxU3pKWbY-3s");

async function main() {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

  const prompt = "What is this image";
  const image = {
    inlineData: {
      data: Buffer.from(fs.readFileSync("plant.jpeg")).toString("base64"),
      mimeType: "image/jpeg",
    },
  };

  const result = await model.generateContent([prompt, image]);
  console.log(result.response.text());
}
main();
