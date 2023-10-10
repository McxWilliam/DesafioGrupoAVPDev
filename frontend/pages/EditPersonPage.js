import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PersonForm from '../components/PersonForm';
import axios from 'axios';

const EditPersonPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [person, setPerson] = useState(null);

  useEffect(() => {
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

  return (
    <div>
      <h1>Editar Pessoa</h1>
      {person && <PersonForm initialData={person} />}
    </div>
  );
};

export default EditPersonPage;
