const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

//   const apiKey = process.env.GEMINI_API_KEY;
const apiKey = "AIzaSyDS6KgOSDg10L2P6qsLLdujTh-E0JgcdXI";
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
      parts: [{ text: "funny Indian retro movies in json format\n" }],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "funny_indian_retro_movies": [\n    {\n      "title": "Andaz Apna Apna",\n      "year": 1994,\n      "language": "Hindi",\n      "genre": ["Comedy", "Romance"],\n      "description": "Two slackers competing for the affections of a rich heiress get caught up in a hilarious series of misadventures involving a wacky gangster and mistaken identities. Known for its iconic characters, absurd situations, and quotable dialogues.",\n      "why_its_funny": "Over-the-top acting, slapstick comedy, silly scenarios, and memorable characters like Crime Master Gogo make this a comedic classic.",\n      "key_actors": ["Aamir Khan", "Salman Khan", "Raveena Tandon", "Karisma Kapoor", "Paresh Rawal"]\n    },\n     {\n      "title": "Hera Pheri",\n      "year": 2000,\n       "language": "Hindi",\n      "genre": ["Comedy", "Crime"],\n      "description": "Three down-on-their-luck men get embroiled in a kidnapping plot and find themselves in increasingly hilarious and chaotic situations. Known for its sharp wit, perfect comedic timing, and iconic characters.",\n      "why_its_funny": "The absurd dialogue, the characters\' terrible decisions, the frantic energy, and the perfect comedic chemistry between the leads makes it timelessly funny.",\n      "key_actors": ["Akshay Kumar", "Suniel Shetty", "Paresh Rawal"]\n    },\n    {\n      "title": "Chupke Chupke",\n      "year": 1975,\n       "language": "Hindi",\n      "genre": ["Comedy", "Romance"],\n      "description": "A newlywed professor and his wife engage in a series of playful pranks and misunderstandings, leading to uproarious situations. Known for its lighthearted humor and charming performances.",\n      "why_its_funny": "The clever wordplay, the mistaken identities, the escalating silliness, and the delightful chemistry between the lead pair create a feel-good comedic experience.",\n       "key_actors": ["Dharmendra", "Amitabh Bachchan", "Sharmila Tagore", "Jaya Bachchan"]\n    },\n     {\n      "title": "Padosan",\n      "year": 1968,\n      "language": "Hindi",\n      "genre": ["Comedy", "Musical", "Romance"],\n      "description": "A simple man tries to woo his beautiful neighbor with the help of his quirky friend, leading to comical misunderstandings and musical antics. A classic for its unique style of comedy and catchy songs.",\n       "why_its_funny": "The slapstick comedy, the funny situations involving the neighbor, the singing battles, and the overall playful tone are highly entertaining.",\n       "key_actors": ["Sunil Dutt", "Saira Banu", "Kishore Kumar", "Mehmood"]\n     },\n     {\n       "title": "Gol Maal",\n       "year": 1979,\n       "language": "Hindi",\n        "genre": ["Comedy"],\n       "description": "A man\'s attempt to maintain two identities leads to a series of hilarious mix-ups and misunderstandings. A classic for its clever writing and performances.",\n       "why_its_funny": "The witty writing, the double roles and the chaos they create, the absurd situations, and the clever humor make this a memorable comedy.",\n       "key_actors": ["Amol Palekar", "Utpal Dutt", "Bindiya Goswami"]\n      }\n   ]\n}\n```\n',
        },
      ],
    },
  ],
});
