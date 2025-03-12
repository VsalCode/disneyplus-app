import BannerDetail from "../../components/BannerDetail";
import BannerMask from "../../components/BannerMask";
import ImageBanner from "../../components/ImageBanner";
import ContentCard from "../../components/ContentCard";
import ScrollableSection from "../../components/ScrollableSection";
import SectionItem from "../../components/ScrollableSection/sectionItem";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import useGenres from "../../hooks/useGenres";
import useMapGenreId from "../../hooks/useMapGenreId";

const Home = () => {
  const API_KEY = import.meta.env.VITE_API_KEY

  const navigate = useNavigate()
  const { loading, data } = useFetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
  
  const { genres } = useGenres()

  const firstContent = data?.results?.[0] || {}

  const genreNames = firstContent.genre_ids ? useMapGenreId(firstContent.genre_ids, genres) : []


  return (
    <div>
      <ImageBanner 
      alt={firstContent.title || firstContent.name}
      src={`https://image.tmdb.org/t/p/original/${firstContent.backdrop_path}`}
      />
      <BannerDetail
      title={firstContent.title || firstContent.name}
      overview={firstContent.overview}
      releaseDate={firstContent.release_date || firstContent.first_air_date}
      genres={genreNames}
      language={firstContent.original_language}
      />
      <BannerMask>
        <ScrollableSection title="Trendings">
          {!loading && (data?.results ?? []).map((content: any) => (
              <SectionItem key={content.id}>
                <ContentCard
                  onClick={() => navigate(`/${content.media_type === 'movie' ? 'movie' : 'tv'}`)}
                  title={content.title || content.name}
                  description={content.overview}
                  posterImage={`https://image.tmdb.org/t/p/w500/${content.poster_path}`}
                  bannerImage={`https://image.tmdb.org/t/p/w500/${content.backdrop_path}`}
                />
              </SectionItem>
            ))}
        </ScrollableSection>
      </BannerMask>
    </div>
  );
};

export default Home;
