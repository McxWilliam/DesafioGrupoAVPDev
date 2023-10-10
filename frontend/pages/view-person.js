import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const ViewPersonPage = () => {
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

  const handleWhatsAppIntegration = () => {
    // Número de telefone 
    //const phoneNumber = person.whatsapp;

    // URL do WhatsApp Web 
    const whatsappUrl = `https://wa.me/${+5585996435579}`;

    // Abre uma nova janela 
    window.open(whatsappUrl);
  };

  if (!person) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>Detalhes da Pessoa</h1>
      <div>
        <strong>Nome:</strong> {person.nome}
      </div>
      <div>
        <strong>E-mail:</strong> {person.email}
      </div>
      <div>
        <strong>Data de Nascimento:</strong> {person.dataNascimento}
      </div>
      <div>
        <strong>Sexo:</strong> {person.sexo}
      </div>
      <div>
        <strong>Profissão:</strong> {person.profissao}
      </div>
      <div>
        <strong>Empresa:</strong> {person.empresa}
      </div>
      <div>
        <strong>WhatsApp:</strong> {person.whatsapp}
        <button onClick={handleWhatsAppIntegration}>Iniciar Conversa no WhatsApp</button>
      </div>
      <div>
        <strong>Celular:</strong> {person.celular}
      </div>
      <div>
        <strong>Endereço:</strong> {person.endereco}
      </div>
      <div>
        <strong>Foto:</strong> <img src={person.foto} alt="Foto da Pessoa" />
      </div>
    </div>
  );
};

export default ViewPersonPage;
