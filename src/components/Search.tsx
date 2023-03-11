import React from "react";
import { styled } from "../stitches.config";

const Container = styled("div", {
  marginBottom: 19,
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
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        autoFocus
      />
    </Container>
  );
};

export default Search;
