"use client"
import { useState } from "react"

interface Icon {
  d: string
  d2?: string
  alt: string
  description?: string
}

export const TheNavbarIcons = ({
  icon,
  styles,
}: {
  icon: Icon
  styles: string
}) => {
  const [fill, setFill] = useState("#BABABA")

  const handleHover = (action: string) => {
    if (action === "gray") {
      setFill("#BABABA")
    }
    if (action === "white") {
      setFill("white")
    }
  }

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }
  return (
    <li
      onMouseEnter={() => {
        handleHover("white")
      }}
      onMouseLeave={() => {
        handleHover("gray")
      }}
      onClick={() => {
        icon.description === "Наверх" && handleScroll()
      }}
      className="mt-[28px] text-[#BABABA] hover:text-white flex flex-row items-center first:mt-[115px] last:mt-[282px] cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="44"
        viewBox="0 0 44 44"
      >
        <path d={icon.d} fill={fill} />
        <path d={icon?.d2} fill={fill} />
      </svg>
      <span className={styles}>{icon.description}</span>
    </li>
  )
}
