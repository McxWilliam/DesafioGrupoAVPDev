import React, { useRef, useEffect } from 'react';

const GoogleMapPeople = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const google = window.google; // Acesse o objeto do Google Maps

    // Verifique se o Google Maps está disponível
    if (!google) {
      console.error('A API do Google Maps não está disponível.');
      return;
    }

    // Coordenadas aleatória (testar se funciona)
    const location = { lat: 40.712776, lng: -74.005974 };

    // Cria o mapa
    const map = new google.maps.Map(mapRef.current, {
      center: location,
      zoom: 12,
    });

    // Cria um marcador para a localização
    const marker = new google.maps.Marker({
      position: location,
      map: map,
      title: 'Localização da Pessoa',
    });
  }, []);

  return <div ref={mapRef} style={{ width: '400px', height: '300px' }} />;
};

export default GoogleMapPeople;
