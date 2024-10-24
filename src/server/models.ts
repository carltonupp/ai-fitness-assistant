export type MacrosRequestBody = {
    protein: number;
    carbs: number;
    fat: number;
}

interface Food {
    name: string;
    protein: number;
    carbs: number;
    fat: number;
}
  
interface Meal {
meal: string;
foods: Food[];
}
  
interface TotalMacronutrients {
    protein: number;
    carbs: number;
    fat: number;
}

export interface MealPlan {
    meal_plan: Meal[];
    total_macronutrients: TotalMacronutrients;
}