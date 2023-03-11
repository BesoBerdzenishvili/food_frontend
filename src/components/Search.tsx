import React from "react";
import { styled } from "../stitches.config";

const Container = styled("div", {
  marginBottom: 19,
});

const Input = styled("input", {
  backgroundColor: "orange",
  outline: "none",
  border: "none",
  borderRadius: 8,
  padding: "11px 8px",
  width: 570,
  fontSize: 19,
  color: "magenta",
});

type SearchProps = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

const Search: React.FC<SearchProps> = ({ searchQuery, setSearchQuery }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Container>
      <Input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        autoFocus
      />
    </Container>
  );
};

export default Search;
