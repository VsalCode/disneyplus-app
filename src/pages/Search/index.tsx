import styles from "./index.module.css"
import ContentCard from "../../components/ContentCard"


const Search = () => {
  return (
    <div>
      <div className={styles.searchBar}>
        <span className="material-symbols-outlined"> search </span>
        <input type="text" placeholder="Movies, shows dan more" />
      </div>
      <div className={styles.contentGrid}>
      {Array(15)
            .fill(0)
            .map((_, index) => (
                  <ContentCard
                    title="Home"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus, sit eaque inventore sed facere in itaque voluptas sequi laborum."
                    posterImage="/public/images/poster.jpg"
                    bannerImage="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/5631/1655631-i-96a171bab2b4"
                  />
            ))}
      </div>
    </div>
  )
}

export default Search
