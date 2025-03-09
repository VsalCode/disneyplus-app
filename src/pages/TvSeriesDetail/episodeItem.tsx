import styles from "./episodeItem.module.css"

interface Props{
  imageUrl: string,
  title: string,
  season: number,
  episode: number,
  date: string,
  desc: string,
  duration: string,
}

const EpisodeItem = (props: Props) => {
  const { imageUrl, title, season, episode, date, desc, duration } = props


  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt="" />
      </div>
      <div className={styles.detailsWrapper}>
        <h3>{title}</h3>
        <p className={styles.episodeSummary}>
          <span>S{season} E{episode}</span>
          <b>&#x2022;</b>
          <span>{date}</span>
          <span>{duration}</span>
        </p>
        <p className={styles.desc}>{desc}</p>
      </div>
    </div>
  )
}

export default EpisodeItem
