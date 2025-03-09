import BannerDetail from "../../components/BannerDetail";
import BannerMask from "../../components/BannerMask";
import ImageBanner from "../../components/ImageBanner";
import EpisodeItem from "./episodeItem";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";

const TvSeriesDetail = () => {
  const navigate = useNavigate();

  return (
    <div>
      <ImageBanner />
      <BannerDetail />
      <BannerMask>
        <h1 className={styles.seasonTitle}>Seasons</h1>
        <div className={styles.tabsSection}>
          <span data-active="true">Season 1</span>
          <span>Season 2</span>
          <span>Season 3</span>
        </div>
        <div>
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <EpisodeItem
                imageUrl="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/2159/1741083422159-h"
                title="DareDevil"
                season={1}
                episode={2}
                duration="1h 30m"
                date="12-12-2012"
                desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia iure corporis laudantium cumque natus aut!"
              />
            ))}
        </div>
      </BannerMask>
    </div>
  );
};

export default TvSeriesDetail;
