// components/SocialMediaIntegration.js

import React, { useState } from 'react';

const SocialMediaIntegration = () => {
  const [linkedIn, setLinkedIn] = useState('');
  const [github, setGitHub] = useState('');
  const [twitter, setTwitter] = useState('');

  const handleLinkedInChange = (e) => {
    setLinkedIn(e.target.value);
  };

  const handleGitHubChange = (e) => {
    setGitHub(e.target.value);
  };

  const handleTwitterChange = (e) => {
    setTwitter(e.target.value);
  };

  const saveSocialMediaLinks = async () => {
    try {
      // Enviar os links das redes sociais para o servidor
      const response = await axios.put(`http://localhost:3000/api/contact/${contactId}`, {
        linkedIn,
        github,
        twitter,
      });
  
      console.log('Links das redes sociais salvos com sucesso:', response.data);
    } catch (error) {
      console.error('Erro ao salvar os links das redes sociais:', error);
    }
  };
  

  return (
    <div>
      <h2>Vinculação de Redes Sociais</h2>
      <label>
        LinkedIn:
        <input type="text" value={linkedIn} onChange={handleLinkedInChange} />
      </label>
      <label>
        GitHub:
        <input type="text" value={github} onChange={handleGitHubChange} />
      </label>
      <label>
        Twitter:
        <input type="text" value={twitter} onChange={handleTwitterChange} />
      </label>
      <button onClick={saveSocialMediaLinks}>Salvar</button>
    </div>
  );
};

export default SocialMediaIntegration;
