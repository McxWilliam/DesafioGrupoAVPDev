import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const EditCompanyForm = () => {
  const router = useRouter();
  const { id } = router.query;
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

  useEffect(() => {
    const fetchCompanyDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/companies/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error('Erro ao buscar os detalhes da empresa:', error);
      }
    };

    if (id) {
      fetchCompanyDetails();
    }
  }, [id]);

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
      await axios.put(`http://localhost:3000/api/companies/${id}`, formData);
      console.log('Empresa atualizada com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar a empresa:', error);
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
      <button type="submit">Atualizar Empresa</button>
    </form>
  );
  
};

export default EditCompanyForm;
