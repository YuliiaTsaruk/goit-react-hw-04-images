import axios from 'axios';

const KEY = '39910183-988d5375891e8a88cc5b567d3';
axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchImgs = async (newQuery, page) => {
  try {
    const response = await axios.get(
      `/?q=${newQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );

    const { hits, totalHits } = response.data;

    if (!hits || hits.length === 0) {
      throw new Error('No results found');
    }

    return { hits, totalHits };
  } catch (error) {
    throw error;
  }
};
