import { useState } from "react";
import "./App.css";
import MealPlanView from "./MealPlanView";

function App() {

  const [diet, setDiet] = useState();

  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const protein = formData.get("protein") as string;
    const carbs = formData.get("carbs") as string;
    const fat = formData.get("fat") as string;
    
    fetch("/get-diet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ protein, carbs, fat }),
    })
      .then(async (response) => await response.json())
      .then((data) => {
        setDiet(data);
      });
  };

  return (
    <div className="container">
      <header>
        <h1>Set Your Macronutrient Targets</h1>
      </header>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="protein">Protein (g):</label>
          <input type="number" id="protein" name="protein" />
        </div>
        <div className="form-group">
          <label htmlFor="carbs">Carbohydrates (g):</label>
          <input type="number" id="carbs" name="carbs" />
        </div>
        <div className="form-group">
          <label htmlFor="fat">Fat (g):</label>
          <input type="number" id="fat" name="fat" />
        </div>
        <button type="submit">Submit</button>
      </form>

      {diet && <MealPlanView plan={diet} />}
    </div>
  );
}

export default App;
