import React, { useState } from 'react';
import AdvancedSearchPeople from '../components/AdvancedSearchPeople';
import GoogleMapPeople from '../components/GoogleMapPeople';
import axios from 'axios';

const AdvancedSearchPeoplePage = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (searchTerm) => {
    try {
      const response = await axios.get(`https://console.cloud.google.com/apis/library/places-backend.googleapis.com?project=desafio-grupo-avp.com/pessoas?searchTerm=${searchTerm}`);
      setSearchResults(response.data);
      console.log('Resultados da pesquisa de pessoas:', response.data);
    } catch (error) {
      console.error('Erro ao buscar os resultados da pesquisa de pessoas:', error);
    }
  };

  return (
    <div>
      <h1>Pesquisa Avançada de Pessoas</h1>
      <AdvancedSearchPeople onSearch={handleSearch} />
      <GoogleMapPeople />
      
      {/* Exibir os resultados da pesquisa de pessoas */}
      <h2>Resultados da Pesquisa de Pessoas:</h2>
      <ul>
        {searchResults.map((result) => (
            <li key={result.id}>
            <strong>Nome:</strong> {result.nome}<br />
            <strong>Profissão:</strong> {result.profissao}<br />
            <strong>Cidade:</strong> {result.cidade}<br />
            <strong>E-mail:</strong> {result.email}<br />
            <strong>Data de Nascimento:</strong> {result.dataNascimento}<br />
            
            </li>
        ))}
        </ul>
    </div>
  );
};

export default AdvancedSearchPeoplePage;
