//Exercício 2
const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

//2.1 Map: Crie uma variável que contenha todas idades dos usuários
let idades = usuarios.map(item => item.idade);

//2.2 Filter: Crie um vetor que tenha apenas empresa: Rocketseat, idade > 18
let users = usuarios.filter(item => item.empresa === 'Rocketseat' && item.idade > 18);

//2.3 Find: Crie uma variável que busque funcionário da empresa Google
let Google = usuarios.find(item => item.empresa === 'Google');

//2.4 Map + Filter: Duplique a idade dos usuários e retorne quem tiver idade até 50 anos
let idosos = usuarios.map(function (item) {
  item.idade = item.idade * 2;
  return item;
}).filter(item => item.idade < 51);