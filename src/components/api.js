const API_KEY = '5577624f107f96fb286666953fd25f4f';

const fetchFromAPI = async (endpoint, params = {}) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3${endpoint}?api_key=${API_KEY}&${new URLSearchParams(
        params
      )}`
    );
    if (!response.ok) {
      throw new Error(response.status);
    }
    return await response.json();
  } catch (error) {
    throw new Error(`API request failed: ${error}`);
  }
};

export const getTrendingMovies = async () => {
  return fetchFromAPI('/trending/all/day');
};

export const searchMovies = async query => {
  return fetchFromAPI('/search/movie', { query });
};

export const getMovieDetails = async movieId => {
  return fetchFromAPI(`/movie/${movieId}`);
};

export const getMovieCast = async movieId => {
  return fetchFromAPI(`/movie/${movieId}/credits`);
};

export const getMovieReviews = async movieId => {
  return fetchFromAPI(`/movie/${movieId}/reviews`);
};
