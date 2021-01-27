import React from "react";
import { Container } from "./styles";

import { FiSearch } from "react-icons/fi";

const SearchBar: React.FC = () => {
  return (
    <Container>
      <input></input>
      <button>
        <FiSearch size={30} color="#FFF"></FiSearch>
      </button>
    </Container>
  );
};

export default SearchBar;
