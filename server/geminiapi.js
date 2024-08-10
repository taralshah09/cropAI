/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */
// const { GoogleAIFileManager } = require("@google/generative-ai/server");
// const {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } = require("@google/generative-ai");

// const apiKey = "AIzaSyBed5H9wfqmBYLvdhyhymvYxU3pKWbY-3s";
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//   model: "gemini-1.5-pro",
// });

// const generationConfig = {
//   temperature: 1,
//   topP: 0.95,
//   topK: 64,
//   maxOutputTokens: 8192,
//   responseMimeType: "text/plain",
// };

// async function run(prompt) {
//   const chatSession = model.startChat({
//     generationConfig,
//     // safetySettings: Adjust safety settings
//     // See https://ai.google.dev/gemini-api/docs/safety-settings
//     history: [],
//   });

//   const result = await chatSession.sendMessage(prompt);

//   return result.response.text()
// }
// module.exports=run

// // run();
