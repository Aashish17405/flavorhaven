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
      className="bg-white rounded-lg shadow-md mb-6 border border-gray-200 cursor-pointer"
      onClick={onClick}
    >
      <div className="p-4">
        <img
          src={imageUrl}
          alt="recipe image"
          className="w-full h-48 object-cover rounded-md"
        />
        <h2 className="text-xl font-semibold mt-4 text-dark">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </button>
  );
};

export default Card;
