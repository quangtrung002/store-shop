import rightArrow from "./btnSlider/right-arrow.svg"
import leftArrow from "./btnSlider/left-arrow.svg"
import style from "./home.module.scss"
import clsx from "clsx"

export default function BtnSlider({moveSlider, direction }) {
  
  return (
    <button className={direction === "next" ? clsx(style.btnNext, style.btnSlider) : clsx(style.btnPrev, style.btnSlider)} onClick = {moveSlider}>
      <img className={clsx(style.btnImg)} src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  )
}
