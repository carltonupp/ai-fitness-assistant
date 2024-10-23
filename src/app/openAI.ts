import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function getDiet(protein: number, carbs: number, fats: number) {
    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            {
                role: "system",
                content: `Create a diet plan for somebody with the following macronutrient targets: ${protein}g Protein, ${carbs}g Carbs, ${fats}g Fat and show the macronutrient breakdown of each meal, in a json format`
            }],
        });

    return response.choices[0].message.content;
}