CREATE TABLE persons (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  data_nascimento DATE,
  sexo VARCHAR(10),
  profissao VARCHAR(100),
  empresa VARCHAR(100),
  whatsapp VARCHAR(15),
  celular VARCHAR(15),
  endereco TEXT,
  foto TEXT
);

CREATE TABLE companies (
  id SERIAL PRIMARY KEY,
  razao_social VARCHAR(255),
  nome_fantasia VARCHAR(255),
  email VARCHAR(255),
  cnpj VARCHAR(18),
  responsavel VARCHAR(255),
  whatsapp VARCHAR(15),
  celular VARCHAR(15),
  telefone_fixo VARCHAR(15),
  endereco TEXT,
  logo TEXT
);
