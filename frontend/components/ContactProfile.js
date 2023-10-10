import React, { useState, useEffect } from 'react';
import SocialMediaIntegration from './SocialMediaIntegration';

const ContactProfile = ({ contactId }) => {
  const [showSocialMediaIntegration, setShowSocialMediaIntegration] = useState(false);

  const toggleSocialMediaIntegration = () => {
    setShowSocialMediaIntegration(!showSocialMediaIntegration);
  };

  return (
    <div>
      <h2>Perfil do Contato</h2>

      <button onClick={toggleSocialMediaIntegration}>
        {showSocialMediaIntegration ? 'Ocultar Redes Sociais' : 'Vincular Redes Sociais'}
      </button>

     
      {showSocialMediaIntegration && <SocialMediaIntegration contactId={contactId} />}
    </div>
  );
};

export default ContactProfile;
