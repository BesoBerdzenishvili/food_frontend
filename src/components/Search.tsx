import React from "react";

type SearchProps = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

const Search: React.FC<SearchProps> = ({ searchQuery, setSearchQuery }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <input type="text" value={searchQuery} onChange={handleInputChange} />
    </div>
  );
};

export default Search;
