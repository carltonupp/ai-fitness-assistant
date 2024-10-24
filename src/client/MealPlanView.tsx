import { MealPlan } from './models';

type MealPlanProps = {
    plan: MealPlan;
}

export default function MealPlanView(props: MealPlanProps) {
    const { mealPlan } = props.plan;

    const totalCarbs = mealPlan.reduce((total, meal) => {
        return total + meal.foods.reduce((foodTotal, food) => foodTotal + food.carbs, 0);
    }, 0);

    console.log(totalCarbs)

    return (
        <div>
            <h2>Meal Plan</h2>
            <ul>
                {mealPlan.map((meal, index) => (
                    <li key={index}>
                        <h3>{meal.meal}</h3>
                        <ul>
                            {meal.foods.map((food, index) => (
                                <li key={index}>
                                    {food.name} - {food.protein}g protein, {food.carbs}g carbs, {food.fat}g fat
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
            <h3>Total Macronutrients</h3>
            {/* <p>
                Protein: {totalMacronutrients.protein}g, Carbs: {totalMacronutrients.carbs}g, Fat: {totalMacronutrients.fat}g
            </p> */}
        </div>
    );
}


