import { useState } from "react";
import { styled } from "../stitches.config";
import { AddForm } from "./AddForm";

const CircleButton = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  backgroundColor: "#FBC02D",
  color: "#FFF",
  fontSize: "24px",
  border: "none",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#FFA000",
  },
});

export const Add = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  const handleClick = () => {
    setShowAddForm(!showAddForm);
  };

  return (
    <>
      <CircleButton onClick={handleClick}>+</CircleButton>
      {showAddForm && <AddForm onClose={handleClick} />}
    </>
  );
};
