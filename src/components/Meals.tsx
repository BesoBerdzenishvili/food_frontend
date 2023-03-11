import React, { useState, useEffect } from "react";
import Meal from "./Meal";
import { Food } from "../utils/types";

type MealsProps = {
  searchQuery: string;
};

const Meals: React.FC<MealsProps> = ({ searchQuery }) => {
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    const url = searchQuery
      ? `/api/search?query=${searchQuery}`
      : "https://food-service-17cn.onrender.com/api/foods";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFoods(data))
      .catch((error) => console.log(error));
  }, [searchQuery]);

  return (
    <div>
      {foods.map((food) => (
        <Meal key={food._id} food={food} />
      ))}
    </div>
  );
};

export default Meals;
