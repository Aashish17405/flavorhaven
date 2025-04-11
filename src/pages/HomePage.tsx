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
    <div className="min-h-screen bg-light">
      {/* Header Section */}
      <div className="bg-primary py-8 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center">
            FlavorHaven
          </h1>
          <p className="text-xl text-white text-center mt-2">
            Discover Culinary Delights
          </p>
        </div>
      </div>

      {/* Recipe Cards Section */}
      <div className="container mx-auto px-4">
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
