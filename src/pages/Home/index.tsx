import BannerDetail from "../../components/BannerDetail";
import BannerMask from "../../components/BannerMask";
import ImageBanner from "../../components/ImageBanner";
import ContentCard from "../../components/ContentCard";
import ScrollableSection from "../../components/ScrollableSection";
import SectionItem from "../../components/ScrollableSection/sectionItem";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const API_KEY = "8cad3ce67daebdbba2eb3d1d0717804d";

const Home = () => {
  const navigate = useNavigate()
  const { loading, data } = useFetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)

  console.log({
    loading,
    data,
  })

  return (
    <div>
      <ImageBanner />
      <BannerDetail />
      <BannerMask>
        <ScrollableSection title="Trending">
          {!loading &&
            data &&
            data.results.map((content: any) => (
              <SectionItem>
                <ContentCard
                  onClick={() => navigate("/contentdetail")}
                  title={content.title}
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
