import styles from "./index.module.css";
import ContentCard from "../../components/ContentCard";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import useDebounce from "../../hooks/useDebounce";

const Search = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search)

  const { data: movieData, loading: movieLoading } = useFetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${debouncedSearch}`);
  const { data: tvData, loading: tvLoading } = useFetch(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${debouncedSearch}`);

  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };

  console.log(movieData, tvData)

  return (
    <div>
      <div
        style={{
          color: "rgb(15, 16, 20)",
        }}
      >
        <p>---------------</p>
      </div>
      <div className={styles.searchBar}>
        <span className="material-symbols-outlined"> search </span>
        <input value={search} onChange={handleChange} type="text" placeholder="Movies, shows dan more" />
      </div>

      {movieLoading || tvLoading ? (
        <div>
          <h1
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            Loading...
          </h1>
        </div>
      ) : (
        <>
          <h2 className={styles.separator}>
            Movies
          </h2>
          <div className={styles.contentGrid}>
            {movieData?.results &&
              movieData.results.map((movieItem: any) => (
                <ContentCard
                  key={movieItem.id}
                  title={movieItem.title}
                  description={movieItem.overview}
                  posterImage={`https://image.tmdb.org/t/p/w342/${movieItem.poster_path}`}
                  bannerImage={`https://image.tmdb.org/t/p/w342/${movieItem.backdrop_path}`}
                />
              ))}
          </div>
          <h2 className={styles.separator2}>
            TV Series
          </h2>
          <div className={styles.contentGrid}>
            {tvData?.results &&
              tvData.results.length > 0 &&
              tvData.results.map((tvItem: any) => (
                <ContentCard
                  title={tvItem.name}
                  description={tvItem.overview}
                  posterImage={`https://image.tmdb.org/t/p/w342/${tvItem.poster_path}`}
                  bannerImage={`https://image.tmdb.org/t/p/w342/${tvItem.backdrop_path}`}
                />
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Search;
