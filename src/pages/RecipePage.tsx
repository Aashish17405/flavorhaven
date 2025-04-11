// pages/RecipePage.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import recipeData from "../store/recipes.json";
import Loader from "../components/Loader";
import { setCurrentAudio, stopCurrentAudio } from "../utils/audioManager";

type Recipe = {
  id: string;
  title: string;
  cooking_time: {
    prep_time: string;
    cook_time: string;
    total_time: string;
  };
  ingredients: string[];
  quantity: {
    [key: string]: string;
  };
  procedure: string[];
  tips: string[];
  sound: string;
  image: string;
};

type RecipesData = {
  recipes: Recipe[];
};

function RecipePage() {
  const { recipeId } = useParams<{ recipeId: string }>();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // Cleanup function to stop audio when component unmounts
    return () => {
      stopCurrentAudio();
    };
  }, []);

  useEffect(() => {
    setLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      const recipesData = recipeData as unknown as RecipesData;
      const foundRecipe = recipesData.recipes.find((r) => r.id === recipeId);
      if (foundRecipe) {
        setRecipe(foundRecipe);
        // Create and play the audio
        const audio = new Audio(foundRecipe.sound);
        setCurrentAudio(audio);
        audio.play().catch((error) => {
          console.error("Error playing sound:", error);
        });
      }
      setLoading(false);
    }, 3000);
  }, [recipeId]);

  if (loading) {
    return <Loader />;
  }

  if (!recipe) {
    return (
      <div className="min-h-screen bg-light flex items-center justify-center">
        <p className="text-dark">Recipe not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light">
      {/* Header */}
      <div className="bg-primary py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white">FlavorHaven</h1>
        </div>
      </div>

      {/* Back Button */}
      <button
        onClick={() => {
          stopCurrentAudio();
          navigate(-1);
        }}
        className="fixed top-4 left-4 bg-primary text-white px-4 py-2 rounded-md"
      >
        ← Back
      </button>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-dark mb-8">{recipe.title}</h2>

        {/* Recipe Image */}
        <div className="mb-8">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-dark mb-4">
              Cooking Time
            </h3>
            <ul className="space-y-2">
              <li className="text-dark">
                Prep Time: {recipe.cooking_time.prep_time}
              </li>
              <li className="text-dark">
                Cook Time: {recipe.cooking_time.cook_time}
              </li>
              <li className="text-dark">
                Total Time: {recipe.cooking_time.total_time}
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-dark mt-8 mb-4">
              Ingredients
            </h3>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-dark">
                  {ingredient}:{" "}
                  {recipe.quantity[ingredient.replace(/\s+/g, "_")]}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-dark mb-4">Procedure</h3>
            <ol className="space-y-4">
              {recipe.procedure.map((step, index) => (
                <li key={index} className="text-dark">
                  <span className="font-semibold">{index + 1}.</span> {step}
                </li>
              ))}
            </ol>

            <h3 className="text-xl font-semibold text-dark mt-8 mb-4">Tips</h3>
            <ul className="space-y-2">
              {recipe.tips.map((tip, index) => (
                <li key={index} className="text-dark">
                  • {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipePage;
