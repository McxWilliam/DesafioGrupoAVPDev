import React, { useState } from 'react';
import axios from 'axios';

const BirthdayDashboard = () => {
  const [birthdayData, setBirthdayData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBirthdayData = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:3000/api/birthday');
      setBirthdayData(response.data);
    } catch (error) {
      console.error('Erro ao buscar os aniversariantes do mês:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Dashboard de Aniversariantes</h2>
      <button onClick={fetchBirthdayData} disabled={loading}>
        {loading ? 'Buscando...' : 'Buscar Aniversariantes do Mês'}
      </button>

      <div>
        {birthdayData.map((dayData, index) => (
          <div key={index}>
            <h3>{dayData.date}</h3>
            <p>Quantidade de aniversariantes: {dayData.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BirthdayDashboard;
