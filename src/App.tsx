import React, { useState } from "react";
import Search from "./components/Search";
import Meals from "./components/Meals";
import { Add } from "./components/Add";

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Meals searchQuery={searchQuery} />
      <Add />
    </>
  );
};

export default App;
