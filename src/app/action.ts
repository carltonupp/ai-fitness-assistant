"use server";

import { getDiet } from "./openAI";

export async function getMacros(currentState: { protein: number; carbs: number; fats: number }, formData: FormData) {    
    const rawForm = {
        protein: Number(formData.get('protein') ?? 0),
        carbs: Number(formData.get('carbs') ?? 0),
        fats: Number(formData.get('fats') ?? 0),
    };

    const resp = await getDiet(rawForm.protein, rawForm.carbs, rawForm.fats);

    console.log(resp);

    return rawForm;
}