import BannerDetail from "../../components/BannerDetail";
import BannerMask from "../../components/BannerMask";
import ImageBanner from "../../components/ImageBanner";
import ContentCard from "../../components/ContentCard";
import ScrollableSection from "../../components/ScrollableSection";
import SectionItem from "../../components/ScrollableSection/sectionItem";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const MoviesDetail = () => {
  const API_KEY = import.meta.env.VITE_API_KEY

  const navigate = useNavigate()
  const { id } = useParams()

  const { data } = useFetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
  
  const { data: similarMoviesData } = useFetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}`)
  

  return (
    <div>
      <ImageBanner 
        src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
        alt={data?.title}
      />
      <BannerDetail 
        title={data?.title}
        overview={data?.overview}
        releaseDate={data?.release_date}
        genres={data?.genres?.map((genre: any) => ({
          id: genre.id,
          name: genre.name
        }))}
        language={data?.original_language}
      />
      <BannerMask>
        <ScrollableSection title="Similar Movies">
          {similarMoviesData?.results.map((movieItem: any) => (
                <SectionItem key={movieItem.id}>
                  <ContentCard
                    onClick={() => navigate(`/movie/${movieItem.id}`)}
                    title={movieItem.title}
                    description={movieItem.overview}
                    posterImage={`https://image.tmdb.org/t/p/w500/${movieItem.poster_path}`}
                    bannerImage={`https://image.tmdb.org/t/p/w500/${movieItem.backdrop_path}`}
                  />
                </SectionItem>
            ))}
        </ScrollableSection>
      </BannerMask>
    </div>
  );
};

export default MoviesDetail;
