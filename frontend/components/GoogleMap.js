import React, { useRef, useEffect } from 'react';

const GoogleMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDkmVMKcYIbhNGeHB6B1ahKtivIFH5rdC0&libraries=places`; // Minha chave de API DO MAPS
    googleMapScript.async = true;
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener('load', () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    });
  }, []);

  return <div ref={mapRef} style={{ width: '400px', height: '300px' }} />;
};

export default GoogleMap;
