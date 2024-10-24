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


export interface MealPlan {
    mealPlan: Meal[];
}