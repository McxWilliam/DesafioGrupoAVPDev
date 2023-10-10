import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const EditPersonPage = () => {
  const router = useRouter();
  const { id } = router.query; // Obtém o ID da pessoa da URL
  const [person, setPerson] = useState(null);

  useEffect(() => {
    // Função para buscar os detalhes da pessoa pelo ID
    const fetchPersonDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/persons/${id}`);
        setPerson(response.data);
      } catch (error) {
        console.error('Erro ao buscar os detalhes da pessoa:', error);
      }
    };

    if (id) {
      fetchPersonDetails();
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPerson({
      ...person,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/persons/${id}`, person);
      console.log('Pessoa atualizada com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar a pessoa:', error);
    }
  };

  if (!person) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>Editar Pessoa</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Nome"
          name="nome"
          value={person.nome}
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="E-mail"
          name="email"
          value={person.email}
          onChange={handleInputChange}
        />
        <input
          type="date"
          placeholder="Data de Nascimento"
          name="dataNascimento"
          value={person.dataNascimento}
          onChange={handleInputChange}
        />
        <select
          name="sexo"
          value={person.sexo}
          onChange={handleInputChange}
        >
          <option value="">Selecione o Sexo</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Outro">Outro</option>
        </select>
        <input
          type="text"
          placeholder="Profissão"
          name="profissao"
          value={person.profissao}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Empresa"
          name="empresa"
          value={person.empresa}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="WhatsApp"
          name="whatsapp"
          value={person.whatsapp}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Celular"
          name="celular"
          value={person.celular}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Endereço"
          name="endereco"
          value={person.endereco}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Link da Foto"
          name="foto"
          value={person.foto}
          onChange={handleInputChange}
        />
        <button type="submit">Atualizar Pessoa</button>
      </form>
    </div>
  );
};

export default EditPersonPage;
