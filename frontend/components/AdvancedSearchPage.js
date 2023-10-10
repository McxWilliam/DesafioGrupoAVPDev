import React, { useState } from 'react';
import AdvancedSearch from '../components/AdvancedSearch';
import GoogleMap from '../components/GoogleMap';
import axios from 'axios';

const AdvancedSearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  
  const handleSearch = async (searchTerm) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/companies?searchTerm=${searchTerm}`);
      setSearchResults(response.data);
      console.log('Resultados da pesquisa:', response.data);
    } catch (error) {
      console.error('Erro ao buscar os resultados da pesquisa:', error);
    }
  };

  return (
    <div>
      <h1>Pesquisa Avançada</h1>
      <AdvancedSearch onSearch={handleSearch} />
      <GoogleMap />
      
      {/* Exibir os resultados da pesquisa */}
      <h2>Resultados da Pesquisa:</h2>
        <ul>
        {searchResults.map((result) => (
            <li key={result.id}>
            <strong>Razão Social:</strong> {result.razaoSocial}<br />
            <strong>Nome Fantasia:</strong> {result.nomeFantasia}<br />
            <strong>E-mail:</strong> {result.email}<br />
            <strong>CNPJ:</strong> {result.cnpj}<br />
            <strong>Responsável:</strong> {result.responsavel}<br />
            <strong>WhatsApp:</strong> {result.whatsapp}<br />
            <strong>Celular:</strong> {result.celular}<br />
            <strong>Telefone Fixo:</strong> {result.telefoneFixo}<br />
            <strong>Endereço:</strong> {result.endereco}<br />
            </li>
        ))}
        </ul>
    </div>
  );
};

export default AdvancedSearchPage;
