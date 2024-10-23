"use client";

import { getMacros } from "./action";
import { useActionState } from "react";
import ResponsePage from "./ResponsePage";

export default function Home() {

  const [ macros, formAction] = useActionState<{ protein: number; carbs: number; fats: number }>(getMacros, null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {macros && <ResponsePage protein={macros.protein} carbs={macros.carbs} fats={macros.fats} />}
      <form className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md" action={formAction} >
        <h2 className="text-2xl font-bold mb-4">Set Your Nutrition Targets</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="protein">
            Protein (grams)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="protein"
            type="number"
            name="protein"
            placeholder="Enter protein target"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="carbs">
            Carbs (grams)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="carbs"
            type="number"
            name="carbs"
            placeholder="Enter carb target"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fats">
            Fats (grams)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="fats"
            type="number"
            name="fats"
            placeholder="Enter fat target"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
