
 // Load environment variables
/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 * 
 */
//, HarmCategory, HarmBlockThreshold 
import { GoogleGenerativeAI} from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
if(!apiKey){
  console.log("errr no api key key");
}
// const apiKey="AIzaSyDXA3mdlE9qGN_2z1BMyM3GclbEQomwG7g";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function runChat(prompt) {
  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [], // Chat history
    });

    // Send the message and await the response
    const result = await chatSession.sendMessage(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Error in runChat:", error);
  }
}

export default runChat;