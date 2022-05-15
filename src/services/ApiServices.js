import axios from 'axios';

async function getApiData(route) {
  console.log({ router: route });
  try {
    let data = await axios.get(route);
    console.log({ data });
    return data.data;
  } catch (err) {
    return null;
  }
}

export { getApiData };
