import { TheNavbarIcons } from "../components/TheNavbarIcons"
import { icons } from "../public/data"
import { useState } from "react"

export const TheNavbar = () => {
  const [styles, setStyles] = useState(
    "text-[#BABABA] ml-4 text-[30px] font-[400] max-h-[44px] hidden"
  )

  const handleHover = (action: string) => {
    switch (action) {
      case "navIn": {
        setStyles(
          "text-[#BABABA] hover:text-white ml-4 text-[30px] font-[400] max-h-[44px] flex "
        )
        break
      }
      case "navOut": {
        setStyles(
          "text-[#BABABA] hover:text-white ml-4 text-[30px] font-[400] max-h-[44px] hidden"
        )
        break
      }
    }
  }

  return (
    <nav
      onMouseEnter={() => {
        handleHover("navIn")
      }}
      onMouseLeave={() => {
        handleHover("navOut")
      }}
      className="mt-10 ml-16 fixed"
    >
      <ul className="flex flex-col">
        {icons.map((e, idx) => (
          <TheNavbarIcons key={idx} icon={e} styles={styles} />
        ))}
      </ul>
    </nav>
  )
}
