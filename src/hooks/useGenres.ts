import useFetch from "./useFetch";

const useGenres = () => {
  const API_KEY = import.meta.env.VITE_API_KEY
  
  const { data: dataMovieGenre, loading: loadingMovieGenre } = useFetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
  );
  const { data: dataTvGenre, loading: loadingTvGenre } = useFetch(
    `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}`
  );

  return {
    loading: loadingMovieGenre || loadingTvGenre,
    genres: [...(dataMovieGenre?.genres || []), ...(dataTvGenre?.genres || [])],
  };
};

export default useGenres;
