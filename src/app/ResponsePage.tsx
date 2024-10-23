import { getDiet } from "./openAI";

type ResponsePageProps = {
    protein: number;
    carbs: number;
    fats: number;
}

export default async function ResponsePage(props: ResponsePageProps) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Nutrition Targets</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="protein">
                        Protein (grams)
                    </label>
                    <p>{props.protein}</p>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="carbs">
                        Carbs (grams)
                    </label>
                    <p>{props.carbs}</p>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fats">
                        Fats (grams)
                    </label>
                    <p>{props.fats}</p>
                </div>
            </div>
        </div>
    );
}