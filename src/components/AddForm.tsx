import React, { useState, useRef, useEffect } from "react";
import { styled } from "../stitches.config";

const Overlay = styled("div", {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
});

const FormContainer = styled("div", {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  borderRadius: "5px",
  padding: "20px",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
});

const Form = styled("form", {
  display: "flex",
  flexDirection: "column",
});

const Label = styled("label", {
  display: "block",
  marginBottom: "5px",
});

const Input = styled("input", {
  padding: "5px",
  marginBottom: "10px",
  border: "1px solid #DDD",
  borderRadius: "3px",
});

const TextArea = styled("textarea", {
  padding: "5px",
  marginBottom: "10px",
  border: "1px solid #DDD",
  borderRadius: "3px",
});

const ButtonContainer = styled("div", {
  display: "flex",
  justifyContent: "flex-end",
});

const Button = styled("button", {
  padding: "5px 10px",
  borderRadius: "3px",
  border: "none",
  backgroundColor: "#FBC02D",
  color: "#FFF",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#FFA000",
  },
});

interface AddFormProps {
  onClose: () => void;
}

export const AddForm: React.FC<AddFormProps> = ({ onClose }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      name,
      description,
      price,
      img,
    };
    try {
      const response = await fetch("/api/foods", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
      // onClose();
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Overlay>
      <FormContainer ref={ref}>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id=" name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <Label htmlFor="description">Description</Label>
          <TextArea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <Label htmlFor="price">Price</Label>
          <Input
            type="number"
            id="price"
            min="0"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

          <Label htmlFor="img">Image URL</Label>
          <Input
            type="url"
            id="img"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            required
          />

          <ButtonContainer>
            <Button type="submit">Add Food</Button>
          </ButtonContainer>
        </Form>
      </FormContainer>
    </Overlay>
  );
};
