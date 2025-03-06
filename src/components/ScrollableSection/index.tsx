import { PropsWithChildren } from "react";
import styles from "./index.module.css";
import { Swiper } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import './swiper.css'

interface Props {
  title: string;
}

const ScrollableSection = (props: PropsWithChildren<Props>) => {
  const { title, children } = props;

  return (
    <div>
      <h2 className={styles.title}>{title}</h2>

      <Swiper modules={[Navigation]} navigation slidesPerView={7.5} spaceBetween={17}slidesPerGroup={3}>
        {children}
      </Swiper>
    </div>
  );
};

export default ScrollableSection;
