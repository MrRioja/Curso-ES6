//Exercício 5
//5.1 Rest: A partir do array, defina uma variável x que recebe a primeira posição do vetor 
//e outra variável y que recebe todo restante dos dados
const arr = [1, 2, 3, 4, 5, 6];
const [x = arr[0], ...y] = arr;

function soma(...params) {
  return params.reduce((total, next) => total + next);
}

//5.2 Spread: A partir do objeto e utilizando o operador spread:
const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
  }
};

const usuario2 = { ...usuario, nome: 'Gabriel' };
const usuario3 = { ...usuario, endereco: { ...usuario.endereco, cidade: 'Lontras' } };