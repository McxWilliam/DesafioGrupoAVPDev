import axios from 'axios';

const deletePerson = async (personId) => {
  try {
    await axios.delete(`http://localhost:3000/api/persons/${personId}`);
    console.log('Pessoa excluída com sucesso!');
  } catch (error) {
    console.error('Erro ao excluir a pessoa:', error);
    throw new Error('Erro ao excluir a pessoa.');
  }
};

export default deletePerson;
