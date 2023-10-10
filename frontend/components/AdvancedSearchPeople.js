import React, { useState } from 'react';

const AdvancedSearchPeople = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Pesquisar por nome, profissão ou cidade"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
      <button onClick={handleSearch}>Pesquisar</button>
    </div>
  );
};

export default AdvancedSearchPeople;
