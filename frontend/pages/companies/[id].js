import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const CompanyDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const fetchCompanyDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/companies/${id}`);
        setCompany(response.data);
      } catch (error) {
        console.error('Erro ao buscar os detalhes da empresa:', error);
      }
    };

    if (id) {
      fetchCompanyDetails();
    }
  }, [id]);

  if (!company) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>Detalhes da Empresa</h1>
      <p>Razão Social: {company.razaoSocial}</p>
      <p>Nome Fantasia: {company.nomeFantasia}</p>
      <p>E-mail: {company.email}</p>
      <p>CNPJ: {company.cnpj}</p>
      <p>Responsável: {company.responsavel}</p>
      <p>WhatsApp: {company.whatsapp}</p>
      <p>Celular: {company.celular}</p>
      <p>Telefone Fixo: {company.telefoneFixo}</p>
      <p>Endereço: {company.endereco}</p>
      <p>Logo: {company.logo}</p>
    </div>
  );
};

export default CompanyDetailsPage;
