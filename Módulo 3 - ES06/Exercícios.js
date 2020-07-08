//Transforme os seguintes trechos de código utilizando async/await:
//1 - Função delay aciona o.then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo() {
  await delay();
  console.log("1s");

  await delay();
  console.log("2s");

  await delay();
  console.log("3s");
}

//Exercício 2
import axios from 'axios';

async function getUserFromGithub(user) {

  try {
    const response = await axios.get(`https://api.github.com/users/${user}`)
    console.log(response.data);
  } catch (err) {
    console.log('Usuário não existe');
  }
};

//Exercício 3
import axios from 'axios';

class Github {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/MrRioja/${repo}`)
      console.log(response.data);
    } catch (err) {
      console.log('Repositório não existe');
    }
  }
};

//Exercício 4
import axios from 'axios';

const buscaUsuario = async user => {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`)
    console.log(response.data);
  } catch (err) {
    console.log('Usuário não existe');
  }
};