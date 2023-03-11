import React, { useState, useEffect } from "react";
import { styled } from "../stitches.config";
import Meal from "./Meal";
import { Food } from "../utils/types";

type MealsProps = {
  searchQuery: string;
};

const Container = styled("div", {
  border: "1px solid magenta",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  width: "100%",
});

const Meals: React.FC<MealsProps> = ({ searchQuery }) => {
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    const url = searchQuery
      ? `https://food-service-17cn.onrender.com/api/search?query=${searchQuery}`
      : "https://food-service-17cn.onrender.com/api/foods";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFoods(data))
      .catch((error) => console.log(error));
  }, [searchQuery]);

  return (
    <Container>
      {foods.map((food) => (
        <Meal key={food._id} food={food} />
      ))}
    </Container>
  );
};

export default Meals;
