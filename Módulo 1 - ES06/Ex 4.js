//Exercício 4
//4.1 Desestruturação simples
const empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
  }
};

const { nome, endereco: { cidade, estado } } = empresa;

//4.2 Desestruturação em parâmetros
function mostraInfo({ nome, idade }) {
  return `${nome} tem ${idade} anos.`;
}