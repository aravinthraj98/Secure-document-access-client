import ipfsAPI from 'ipfs-api';
const ipfs = ipfsAPI({
  host: 'ipfs.infura.io',
  port: '5001',
  protocol: 'https',
});
export default ipfs;
