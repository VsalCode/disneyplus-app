import { useState } from "react";
import BannerDetail from "../../components/BannerDetail";
import BannerMask from "../../components/BannerMask";
import ImageBanner from "../../components/ImageBanner";
import useFetch from "../../hooks/useFetch";
import EpisodeItem from "./episodeItem";
import styles from "./index.module.css";
import {useParams } from "react-router-dom";

const TvSeriesDetail = () => {
  const API_KEY = import.meta.env.VITE_API_KEY

  const [activeSeason, setActiveSeason] = useState(0)

  const { id } = useParams()
  const { data } = useFetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`)

  const { data: seasonData } = useFetch(`https://api.themoviedb.org/3/tv/${id}/season/${activeSeason}?api_key=${API_KEY}`)

  return (
    <div>
      <ImageBanner 
        src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
        alt={data?.name}
      />
      <BannerDetail
        title={data?.name}
        overview={data?.overview}
        releaseDate={data?.first_air_date}
        genres={data?.genres?.map((genre: any) => ({
          id: genre.id,
          name: genre.name
        }))}
        language={data?.original_language}
      />
      <BannerMask>
        <h1 className={styles.seasonTitle}>Seasons</h1>
        <div className={styles.tabsSection}>
          {
            data?.seasons?.map((seasonItem: any) => {
              <span
              data-active={seasonItem.season_number === activeSeason}
              onClick={() => setActiveSeason(seasonItem.season_number)} 
              key={seasonItem.id}>{seasonItem.name}</span>
            })
          }
          <span>Season 2</span>
          <span>Season 3</span>
        </div>
        <div>
          {
            seasonData?.episodes?.map((episode: any) => {
              return(
                <EpisodeItem
                imageUrl={`https://image.tmdb.org/t/p/w500/${episode.still_path}`}
                title={episode.name}
                season={episode.season_number}
                episode={episode.episode_number}
                duration={episode.runtime}
                date={episode.air_date}
                desc={episode.overview}
              />
              )
            })
          }
        </div>
      </BannerMask>
    </div>
  );
};

export default TvSeriesDetail;

