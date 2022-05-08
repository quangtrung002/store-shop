import clsx from "clsx";
import Slider from "./Slider";
import style from "./home.module.scss"
import UserSlider from "./UserSlider";
import Item from "./Item";

export default function Home() {
  return (
    <div className={clsx(style.home)} >
      <Slider />
      <UserSlider />
      <Item/>
    </div>
  )
}
