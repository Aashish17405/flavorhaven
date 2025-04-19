interface RecipeProps {
  title: string;
  imageUrl: string;
  description: string;
  onClick?: () => void;
}

const Card: React.FC<RecipeProps> = ({
  title,
  imageUrl,
  description,
  onClick,
}) => {
  return (
    <button
      className="flex flex-col bg-white rounded-lg shadow-md mb-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden group w-full"
      onClick={onClick}
    >
      <div className="flex flex-col h-full">
        <div className="relative overflow-hidden w-full h-48">
          <img
            src={imageUrl}
            alt={`${title} recipe`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-4 flex flex-col">
          <h2 className="text-xl font-semibold text-accent-dark group-hover:text-primary transition-colors duration-300">
            {title}
          </h2>
          <p className="text-gray-600 mt-2 h-16 overflow-hidden">{description}</p>
          <div className="mt-auto text-sm text-secondary font-medium">
            View Recipe →
          </div>
        </div>
      </div>
    </button>
  );
};

export default Card;
