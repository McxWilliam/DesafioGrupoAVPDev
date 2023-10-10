import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const ViewCompaniesPage = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/companies');
        setCompanies(response.data);
      } catch (error) {
        console.error('Erro ao buscar as empresas:', error);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <div>
      <h1>Visualizar Empresas</h1>
      <ul>
        {companies.map((company) => (
          <li key={company.id}>
            <Link href={`/companies/${company.id}`}>
              <a>
                {company.nomeFantasia} ({company.razaoSocial})
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewCompaniesPage;
