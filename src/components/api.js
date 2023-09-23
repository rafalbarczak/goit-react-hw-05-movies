export async function fetchMovies(page) {
  const API_KEY = '5577624f107f96fb286666953fd25f4f';

  return fetch(
    `https://api.themoviedb.org/3/trending/all/day?page=${page}&api_key=${API_KEY}`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      // console.log(response.json());
      return response.json();
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      console.log(error);
    });
}
