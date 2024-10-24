import OpenAI from "openai";
import { MacrosRequestBody } from "./models.js";

export async function getDiet({protein, carbs, fat}: MacrosRequestBody) {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const prompt =
        `Generate a meal plan in JSON format with the following macronutrient targets:
        - Protein: ${protein}g
        - Carbs: ${carbs}g
        - Fat: ${fat}g

        The JSON structure should include the following:
        - Each meal (Breakfast, Lunch, Snack, Dinner) with the food items, measurements for each item, and macronutrient breakdown (protein, carbs, fat, and calories).
        - A "daily_totals" section that sums up the total protein, carbs, fat, and calories for the entire day.

        The meals and food items should be selected to precisely meet the given macronutrient targets as closely as possible. Use realistic and commonly available food portions and measurements (e.g., in grams, cups, tablespoons).

        Return only the JSON output with no additional explanation.
        `;

    const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
            {
                role: "system",
                content: prompt,
            }],
    });

    const answer = response.choices[0].message.content;

    if (!answer) {
        throw new Error("No response from OpenAI");
    }

    const regex = /```json([\s\S]*?)```/;
    const match = answer.match(regex);

    if (!match) {
        throw new Error("No JSON output found in response");
    }

    const jsonContent = match[1].trim();

    return JSON.parse(jsonContent);
}