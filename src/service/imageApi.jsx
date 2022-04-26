import { toast } from 'react-toastify';
const axios = require('axios').default;

const getImage = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '23008045-07b9dd7ada273e1818ae76f5a',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  },
});

const imagesApi = async (q = '', page = 1) => {
  const params = { q, page };

  try {
    const { data } = await getImage('', { params });

    return data.hits;
  } catch (error) {
    toast.error(`По вашему запросу ${q} не чего не найдено 😔`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

export default imagesApi;
