import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListPersonsPage = () => {
  const [persons, setPersons] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const personsPerPage = 5; // Altere o número de pessoas por página conforme necessário

  useEffect(() => {
    const fetchPersons = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/persons');
        setPersons(response.data);
      } catch (error) {
        console.error('Erro ao buscar as pessoas:', error);
      }
    };

    fetchPersons();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDeleteClick = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir esta pessoa?')) {
      try {
        await axios.delete(`http://localhost:3000/api/persons/${id}`);
        console.log('Pessoa excluída com sucesso!');
        const updatedPersons = persons.filter((person) => person.id !== id);
        setPersons(updatedPersons);
        // Atualiza a lista de pessoas após a exclusão
        const filtered = updatedPersons.filter((person) => {
          return (
            person.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
            person.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            person.empresa.toLowerCase().includes(searchTerm.toLowerCase())
          );
        });
        setFilteredPersons(filtered);
      } catch (error) {
        console.error('Erro ao excluir a pessoa:', error);
      }
    }
  };

  const indexOfLastPerson = currentPage * personsPerPage;
  const indexOfFirstPerson = indexOfLastPerson - personsPerPage;
  const currentPersons = filteredPersons.slice(indexOfFirstPerson, indexOfLastPerson);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Lista de Pessoas</h1>
      <input
        type="text"
        placeholder="Pesquisar por nome, e-mail ou empresa"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul>
        {currentPersons.map((person) => (
          <li key={person.id}>
            {person.nome} - {person.email} - {person.empresa}
            <button onClick={() => handleDeleteClick(person.id)}>Excluir</button>
          </li>
        ))}
      </ul>
      <Pagination
        itemsPerPage={personsPerPage}
        totalItems={filteredPersons.length}
        paginate={paginate}
      />
    </div>
  );
};

export default ListPersonsPage;
