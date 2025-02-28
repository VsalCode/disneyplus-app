import clsx from "clsx"
import styles from "./index.module.css"

const BannerDetail = () => {
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <h1 className={styles.title} >Title</h1>
        <div className={clsx (styles.section, styles.section1)}>
          <span>2024</span>
          <i>●</i>
          <span>English</span>
        </div>
        <div className={clsx (styles.section, styles.section2)}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consectetur consequuntur et aliquid reiciendis eaque.</p>
        </div>
        <div className={clsx (styles.section, styles.section3)}>
          {["Romance","Horror"].map((genre, index) => (
            <>
            {index > 0 && <span>|</span>}
            <b key={genre}>{genre}</b>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BannerDetail
