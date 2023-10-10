import React, { useState } from 'react';
import axios from 'axios';

const CompanyForm = () => {
  const [formData, setFormData] = useState({
    razaoSocial: '',
    nomeFantasia: '',
    email: '',
    cnpj: '',
    responsavel: '',
    whatsapp: '',
    celular: '',
    telefoneFixo: '',
    endereco: '',
    logo: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/companies', formData);
      console.log('Empresa cadastrada com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar a empresa:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Razão Social"
        name="razaoSocial"
        value={formData.razaoSocial}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Nome Fantasia"
        name="nomeFantasia"
        value={formData.nomeFantasia}
        onChange={handleInputChange}
      />
      <input
        type="email"
        placeholder="E-mail"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="CNPJ"
        name="cnpj"
        value={formData.cnpj}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Responsável"
        name="responsavel"
        value={formData.responsavel}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="WhatsApp"
        name="whatsapp"
        value={formData.whatsapp}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Celular"
        name="celular"
        value={formData.celular}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Telefone Fixo"
        name="telefoneFixo"
        value={formData.telefoneFixo}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Endereço"
        name="endereco"
        value={formData.endereco}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Logo (URL)"
        name="logo"
        value={formData.logo}
        onChange={handleInputChange}
      />
      {/* Botão de cadastro */}
      <button type="submit">Cadastrar Empresa</button>
    </form>
  );
};

export default CompanyForm;
