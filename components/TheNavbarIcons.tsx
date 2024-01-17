"use client"
import { useState } from "react"

import Link from "next/link"
interface Icon {
  d: string
  d2?: string
  d3?: string
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
      className="mt-[28px] text-[#BABABA] hover:text-white flex flex-row items-center first:mt-[0px] first:mb-[110px] last:mt-[282px] cursor-pointer"
    >
      <Link href={icon.alt === "logo" || icon.alt === "home" ? "/" : ""}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={icon.alt === "logo" ? "144" : "44"}
          height={icon.alt === "logo" ? "50" : "44"}
          viewBox={icon.alt === "logo" ? "0 0 144 50" : "0 0 44 44"}
        >
          <path d={icon.d} fill={fill} />
          <path d={icon?.d2} fill={fill} />
          <path d={icon?.d3} fill={fill} />
        </svg>
      </Link>
      <span className={styles}>
        <Link href={icon.alt === "home" ? "/" : ""}>{icon.description}</Link>
      </span>
    </li>
  )
}
