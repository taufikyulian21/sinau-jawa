import { GoogleGenAI, Type, Schema } from "@google/genai";
import { WordExample, QuizQuestion } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// Schema for Word Generation
const wordsSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    examples: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          javanese: { type: Type.STRING, description: "The word in Javanese script (Aksara Jawa)" },
          latin: { type: Type.STRING, description: "Transliteration in Latin alphabet" },
          meaning: { type: Type.STRING, description: "Meaning in Indonesian" }
        },
        required: ["javanese", "latin", "meaning"]
      }
    }
  }
};

// Schema for Quiz Generation
const quizSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    questions: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          id: { type: Type.STRING },
          question: { type: Type.STRING, description: "The question text, usually asking to translate or identify" },
          type: { type: Type.STRING, enum: ["multiple-choice"] },
          options: { type: Type.ARRAY, items: { type: Type.STRING }, description: "4 possible answers" },
          correctAnswer: { type: Type.STRING, description: "The correct answer string matching one of the options" },
          explanation: { type: Type.STRING, description: "Short explanation why it is correct" }
        },
        required: ["id", "question", "type", "options", "correctAnswer", "explanation"]
      }
    }
  }
};

export const generateWordExamples = async (topic: string = "daily life"): Promise<WordExample[]> => {
  try {
    const model = "gemini-2.5-flash";
    const prompt = `Generate 3 simple Javanese words or short phrases about '${topic}' written in Aksara Jawa. Ensure they are suitable for elementary school students.`;

    const result = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: wordsSchema,
        systemInstruction: "You are a Javanese language teacher for 6th grade students. Provide accurate Aksara Jawa Unicode characters."
      }
    });

    if (result.text) {
      const data = JSON.parse(result.text);
      return data.examples || [];
    }
    return [];
  } catch (error) {
    console.error("Error generating words:", error);
    return [
        { javanese: "ꦱꦒꦺꦠ꧀", latin: "Saget", meaning: "Bisa (Error fallback)" }
    ];
  }
};

export const generateQuizQuestions = async (count: number = 5): Promise<QuizQuestion[]> => {
  try {
    const model = "gemini-2.5-flash";
    const prompt = `Create ${count} multiple-choice quiz questions about reading Aksara Jawa (Nglegena, Sandhangan, or Pasangan). 
    Mix of: 
    1. Display Aksara, ask for Latin.
    2. Display Latin, ask for Aksara.
    3. Identification of Sandhangan.`;

    const result = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: quizSchema,
        systemInstruction: "You are a Javanese language teacher. Create fun and educational questions for children."
      }
    });

    if (result.text) {
      const data = JSON.parse(result.text);
      return data.questions || [];
    }
    return [];
  } catch (error) {
    console.error("Error generating quiz:", error);
    return [];
  }
};
