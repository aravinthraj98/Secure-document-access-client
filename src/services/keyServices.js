import axios from 'axios';
const NodeRSA = require('node-rsa');

const getGeneratedKey = async (password) => {
  let result = await axios.get('http://localhost:4000/getkey');
  console.log({ result });
};

export default getGeneratedKey;
