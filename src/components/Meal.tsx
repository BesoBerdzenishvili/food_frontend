import React from "react";
import { styled } from "../stitches.config";

type MealProps = {
  food: {
    name: string;
    description: string;
    img: string;
    price: number;
  };
};

const Container = styled("div", {
  backgroundColor: "orange",
  padding: "16px",
  borderRadius: "8px",
});

const Image = styled("img", {
  width: "100%",
  height: "auto",
  objectFit: "cover",
  borderRadius: "8px",
});

const Name = styled("h3", {
  margin: "8px 0",
  fontSize: "20px",
  fontWeight: "bold",
});

const Description = styled("p", {
  margin: "8px 0",
  fontSize: "16px",
});

const Price = styled("p", {
  margin: "8px 0",
  fontSize: "20px",
  fontWeight: "bold",
});

const Meal: React.FC<MealProps> = ({ food }) => {
  const { name, description, img, price } = food;
  return (
    <Container>
      <Image src={img} alt={name} />
      <Name>{name}</Name>
      <Description>{description}</Description>
      <Price>${price.toFixed(2)}</Price>
    </Container>
  );
};

export default Meal;
