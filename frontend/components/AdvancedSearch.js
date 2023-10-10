import React, { useState } from 'react';

const AdvancedSearch = ({ onSearch }) => {
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
        placeholder="Pesquisar por razão social, nome fantasia ou CNPJ"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
      <button onClick={handleSearch}>Pesquisar</button>
    </div>
  );
};

export default AdvancedSearch;
