import styles from "./index.module.css";

interface Props{
  title: string,
  description: string,
  posterImage: any,
  bannerImage: any
}

const ContentCard = (props: Props) => {
  const { title, description, posterImage, bannerImage } = props;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.poster}>
          <img src={posterImage} alt="" width="100%" />
        </div>
      </div>

      <div className={styles.detail}>
        <div className={styles.BannerWrapper}>
          <img
            src={bannerImage}
            alt="image padd"
            width="100%"
          />
        </div>
        <div className={styles.detailWrapper}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
