import React, { useEffect } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import '../slider.css'
import Img2 from '../assets/image/homeBanner4.jpeg'
import Img3 from '../assets/image/home-banner1.jpeg'
import Img4 from '../assets/image/homeBaner2.jpeg'
import Img1 from '../assets/image/header-2.jpg'
import Img5 from '../assets/image/homeBanner3.jpeg'
import Img6 from '../assets/image/banner.jpeg'

const carousel = (slider) => {
  const z = 300

  function rotate() {
    const deg = 360 * slider.track.details.progress
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
  }

  slider.on("created", () => {
    const deg = 360 / slider.slides.length
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
    })
    rotate()
  })

  slider.on("detailsChanged", rotate)
}

export default function Slider() {
  const [sliderRef, slider] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  )

  // حرکت اتومات هر 3 ثانیه
  useEffect(() => {
    if (!slider) return
    const interval = setInterval(() => {
      slider.current?.next()
    }, 3000)

    return () => clearInterval(interval)
  }, [slider])

  return (
    <div className="wrapper mt-[40px]">
      <div className="scene">
        <div className="carousel keen-slider" ref={sliderRef}>
          <figure className="carousel__cell number-slide">
            <img src={Img1} className="w-full h-full" alt="حصارک پنجشیر" />
          </figure>
          <figure className="carousel__cell number-slide">
            <img src={Img2} className="w-full h-full" alt="حصارک پنجشیر" />
          </figure>
          <figure className="carousel__cell number-slide">
            <img src={Img3} className="w-full h-full" alt="حصارک پنجشیر" />
          </figure>
          <figure className="carousel__cell number-slide">
            <img src={Img4} className="w-full h-full" alt="حصارک پنجشیر" />
          </figure>
          <figure className="carousel__cell number-slide">
            <img src={Img5} className="w-full h-full" alt="حصارک پنجشیر" />
          </figure>
          <figure className="carousel__cell number-slide">
            <img src={Img6} className="w-full h-full" alt="حصارک پنجشیر" />
          </figure>
        </div>
      </div>
    </div>
  )
}
