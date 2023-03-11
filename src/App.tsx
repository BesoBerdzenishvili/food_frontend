import React, { useState } from "react";
import { styled } from "./stitches.config";
import Search from "./components/Search";
import Meals from "./components/Meals";
import Add from "./components/Add";

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const Container = styled("div", {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 800,
    width: "100%",
  });

  return (
    <Container>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Meals searchQuery={searchQuery} />
      <Add />
    </Container>
  );
};

export default App;
