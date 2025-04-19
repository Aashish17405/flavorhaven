import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { stopCurrentAudio } from "../utils/audioManager";
import recipeData from "../store/recipes.json";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    stopCurrentAudio();
  }, []);

  const handleCardClick = (recipeId: string) => {
    navigate(`/recipe/${recipeId}`);
  };

  return (
    <div>
      {/* Recipe Cards Section */}
      <div className="container mx-auto px-4 pb-12">
        <h2 className="text-2xl font-semibold text-accent-dark my-6">
          Popular Recipes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipeData.recipes.map((recipe) => (
            <Card
              key={recipe.id}
              title={recipe.title}
              imageUrl={recipe.image}
              description={`Discover the art of making ${recipe.title.toLowerCase()}`}
              onClick={() => handleCardClick(recipe.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
