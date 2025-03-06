import { PropsWithChildren } from "react"
import { SwiperSlide } from "swiper/react"

const SectionItem = (props: PropsWithChildren<unknown>) => {
  const {children} = props

  return (
    <SwiperSlide>{children}</SwiperSlide>  
  )

}

SectionItem.displayName = "SwiperSlide"

export default SectionItem