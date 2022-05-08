import { useEffect, useState } from "react"
import style from "./home.module.scss"
import clsx from "clsx"
import BtnSlider from "./BtnSlider"
const lengthSlider = 2

export default function Slider() {
  const [slide, setSlide] = useState(0);
  const slider = [
    {
      name: "leather bag",
      des: "hand cut and crafted in soft nenuine leather"
    },
    {
      name: "stripes",
      des: "mad for summer"
    }]

  const handlePrevSlider = () => {
    if (slide !== lengthSlider - 1) setSlide(slide + 1)
    else if (slide === lengthSlider - 1) setSlide(0)
  }
  const handleNextSlider = () => {
    if (slide !== 0) setSlide(slide - 1)
    else if (slide === 0) setSlide(lengthSlider - 1)
  }
  
  useEffect(() => {
    setTimeout(() => {
      handleNextSlider()
      }, 3000)
    }, [slide])


  return (
    <div className={clsx(style.slider)}>
      <div className={clsx(style.slides)}>
        {slider.map((item, index) => (
          <div className={slide === index ? clsx(style.slide, style.slideActive) : clsx(style.slide)} key={index}>
            <img className={clsx(style.slideImg)} src={process.env.PUBLIC_URL + `/slider/img${index + 1}.jpg`} />
            <p className={clsx(style.descrip)}>{item.des}</p>
            <h3 className={clsx(style.name)} >{item.name}</h3>
            <div className={clsx(style.explorer)} >
              <a>explorer</a>
              <a>shopping now</a>
            </div>
          </div>
        ))}
      </div>
      <BtnSlider moveSlider={handlePrevSlider} direction={"prev"} />
      <BtnSlider moveSlider={handleNextSlider} direction={"next"} />
    </div>
  )
}
