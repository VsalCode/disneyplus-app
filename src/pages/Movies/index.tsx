import BannerDetail from "../../components/BannerDetail";
import BannerMask from "../../components/BannerMask";
import ImageBanner from "../../components/ImageBanner";
import ContentCard from "../../components/ContentCard";
import ScrollableSection from "../../components/ScrollableSection";
import SectionItem from "../../components/ScrollableSection/sectionItem";
import { useNavigate } from "react-router-dom";

const Movies = () => {
  const navigate = useNavigate()

  return (
    <div>
      <ImageBanner />
      <BannerDetail />
      <BannerMask>
        <ScrollableSection title="Popular Movies">
          {Array(12)
            .fill(0)
            .map((_, index) => (
              <div
                style={{
                  width: "200px",
                }}
              >
                <SectionItem>
                  <ContentCard
                    onClick={ () => navigate("/contentdetail")}
                    title="title"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus, sit eaque inventore sed facere in itaque voluptas sequi laborum."
                    posterImage="/public/images/poster.jpg"
                    bannerImage="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/5631/1655631-i-96a171bab2b4"
                  />
                </SectionItem>
              </div>
            ))}
        </ScrollableSection>
      </BannerMask>
    </div>
  );
};

export default Movies;
