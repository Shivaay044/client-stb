"use client"
import * as React from "react"
import "./slider.css"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image, { StaticImageData } from "next/image"


type PropType = {
   height?:string;
   width?:string;
   data:StaticImageData[];
   preview:number,
   spacing?:number,
   loop:boolean,
   duration?:number
}

export default function BannerSlider({height="100px",data, width,preview=2,spacing,loop,duration}:PropType) {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: preview,
      spacing: spacing,
    },
    loop:loop,
    defaultAnimation:{
        duration:duration
    },
    breakpoints: {
      '(max-width: 500px)': {
        loop:true,
        slides: {
          perView: 3,
          spacing: 2,
        },
      },
    }
  },[
    (slider) => {
      let timeout: ReturnType<typeof setTimeout>
      let mouseOver = false
      function clearNextTimeout() {
        clearTimeout(timeout)
      }
      function nextTimeout() {
        clearTimeout(timeout)
        if (mouseOver) return
        timeout = setTimeout(() => {
          slider.next()
        }, 2000)
      }
      slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => {
          mouseOver = true
          clearNextTimeout()
        })
        slider.container.addEventListener("mouseout", () => {
          mouseOver = false
          nextTimeout()
        })
        nextTimeout()
      })
      slider.on("dragStarted", clearNextTimeout)
      slider.on("animationEnded", nextTimeout)
      slider.on("updated", nextTimeout)
    },
  ])
  return (
    <div ref={ref} className={`keen-slider h-[${height}] m-auto`} style={{
        height:height,
        width:width
    }}>
      {
        data?.map((el,i) =>(
                <Image key={i} className="keen-slider__slide" src={el} alt=""/>
        ))
      }
      {/* <div className="keen-slider__slide number-slide2">2</div>
      <div className="keen-slider__slide number-slide3">3</div>
      <div className="keen-slider__slide number-slide4">4</div>
      <div className="keen-slider__slide number-slide5">5</div>
      <div className="keen-slider__slide number-slide6">6</div> */}
    </div>
  )
}