import React, { useState } from 'react';
import axios from 'axios';

const PersonForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    dataNascimento: '',
    sexo: '',
    profissao: '',
    empresa: '',
    whatsapp: '',
    celular: '',
    endereco: '',
    foto: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fazer a requisição POST para o backend com os dados do formulário
      const response = await axios.post('http://localhost:3000/api/persons', formData);

      // Limpa o form após o envio
      setFormData({
        nome: '',
        email: '',
        dataNascimento: '',
        sexo: '',
        profissao: '',
        empresa: '',
        whatsapp: '',
        celular: '',
        endereco: '',
        foto: '',
      });

      console.log('Pessoa adicionada com sucesso:', response.data);
    } catch (error) {
      console.error('Erro ao adicionar pessoa:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        name="nome"
        value={formData.nome}
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="E-mail"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="date"
        placeholder="Data de Nascimento"
        name="dataNascimento"
        value={formData.dataNascimento}
        onChange={handleChange}
      />
      <select
        name="sexo"
        value={formData.sexo}
        onChange={handleChange}
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
        value={formData.profissao}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Empresa"
        name="empresa"
        value={formData.empresa}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="WhatsApp"
        name="whatsapp"
        value={formData.whatsapp}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Celular"
        name="celular"
        value={formData.celular}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Endereço"
        name="endereco"
        value={formData.endereco}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Link da Foto"
        name="foto"
        value={formData.foto}
        onChange={handleChange}
      />
      <button type="submit">Adicionar Pessoa</button>
    </form>
  );
};

export default PersonForm;
