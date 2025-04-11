import { useState } from "react";

const cookingTips = [
  "Roast your spices before grinding – it enhances flavor and aroma (called 'bhunao').",
  "Use ghee (clarified butter) for richer flavor in dals, curries, and sweets.",
  "Soak lentils and rice for 15–30 minutes before cooking for faster cooking and better texture.",
  "Add salt to onions while sautéing – it helps them brown faster.",
  "Tempering (tadka) should always go into hot oil to release full flavor from spices.",
  "Cook tomatoes until oil separates – that's a sign the masala is ready.",
  "Use a mix of whole and ground spices for depth in flavor – like bay leaf + garam masala.",
  "Grind ginger and garlic fresh for intense aroma – way better than store-bought paste.",
  "Don't overcrowd your pan when frying or roasting – it leads to steaming, not crisping.",
  "Always taste and adjust salt/spices after the dish is 90% done – flavors deepen over time.",
  "Add fresh herbs like coriander (dhaniya) only at the end to retain color and fragrance.",
  "Use yogurt or lemon juice at the end of cooking for tanginess without curdling.",
  "Marinate meat overnight with spices and curd – makes it juicier and flavorful.",
  "Use a pinch of hing (asafoetida) in lentil dishes – it adds depth and aids digestion.",
  "Use jaggery (gur) or sugar sparingly to balance spicy and tangy flavors in gravies or sambars.",
];

const Loader = () => {
  const [tip] = useState(() => {
    const randomIndex = Math.floor(Math.random() * cookingTips.length);
    return cookingTips[randomIndex];
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md mx-4">
        <div className="flex justify-center mb-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
        <p className="text-center text-dark font-medium">{tip}</p>
      </div>
    </div>
  );
};

export default Loader;
