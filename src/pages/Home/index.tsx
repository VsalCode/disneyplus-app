import BannerDetail from "../../components/BannerDetail"
import BannerMask from "../../components/BannerMask"
import ImageBanner from "../../components/ImageBanner"
import ContentCard from "../../components/ContentCard"

const Home = () => {
  return (
    <div>
      <ImageBanner />
      <BannerMask />
      <BannerDetail />
    
      <div style={{ 
        width: '200px',

       }} >
        <ContentCard
        title='title'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus, sit eaque inventore sed facere in itaque voluptas sequi laborum.'
        posterImage='/public/images/poster.jpg'
        bannerImage='https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/5631/1655631-i-96a171bab2b4'
        />
      </div>
    </div>
  )
}

export default Home