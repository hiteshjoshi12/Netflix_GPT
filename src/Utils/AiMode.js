const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

  export const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "\"Act as a Movie Recomendation system and suggest some movies for the funny indian movies only give me names of 8 movies, comma-separated like the example given ahead.\nRecomended_movies: Gadar, Sholay, Don, Golmal, DDLJ"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "Okay, I understand. Here are 8 funny Indian movie recommendations:\n\nRecomended_movies: Hera Pheri, Andaz Apna Apna, Dhamaal, Chupke Chupke, Welcome, Hungama, 3 Idiots, Angoor\n"},
        ],
      },
    ],
  });

