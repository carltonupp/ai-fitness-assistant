import OpenAI from "openai";
import { MacrosRequestBody, MealPlan } from "./models.js";

export async function getDiet({protein, carbs, fat}: MacrosRequestBody): Promise<MealPlan> {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const prompt =    
        `You are a nutritionist tasked with creating a precise meal plan for a client using specified macronutrient targets.

        **Objective**: Generate a meal plan that exactly meets the given macronutrient targets using standard measurements (e.g., grams, ounces).

        **Targets**:
        - Protein: ${protein} grams
        - Carbs: ${carbs} grams
        - Fat: ${fat} grams

        **Instructions**:
        - Use the provided variables for protein, carbs, and fat to fill in the targets.
        - Structure your response precisely according to the specified JSON format.
        - Do not include any additional text or explanations outside the JSON format.

        **JSON Schema**:
        \`\`\`json
        {
            "mealPlan": [
                {
                    "meal": "Breakfast",
                    "foods": [
                        {
                            "name": "Food 1",
                            "protein": 0,
                            "carbs": 0,
                            "fat": 0
                        }
                    ]
                }
            ],
            "totalMacronutrients": {
                "protein": 0,
                "carbs": 0,
                "fat": 0
            }
        }
        \`\`\

        Remember to ensure that the sum of the macronutrients in the meal plan exactly matches the provided targets for protein, carbs, and fat. `;

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