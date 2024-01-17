import Link from "next/link"
import { useState } from "react"

interface Movie {
  name?: string
  rating?: string
  url: string
}

export const TheMovieCard = ({
  movie,
  idx,
  w,
  h,
}: {
  movie: Movie
  idx: number
  w: number
  h: number
}) => {
  const [styles, setStyles] = useState("")
  const [textStyle, setTextStyles] = useState("outline-text")

  const handleHover = (action: string) => {
    switch (action) {
      case "imgIn": {
        setStyles(
          "hover:outline-[#5712b1] hover:rounded-[20px] hover:outline-4"
        )
        break
      }
      case "imgOut": {
        setStyles("")
        break
      }
      case "textIn": {
        setTextStyles("filled-text")
        break
      }
      case "textOut": {
        setTextStyles("outline-text")
        break
      }
    }
  }

  return (
    <Link href="/series">
      <article
        className={
          movie.rating
            ? `flex flex-col mr-[44px] min-h-[${h}px] min-w-[${w}px]`
            : `flex flex-row mr-[44px] min-h-[${h}px] min-w-[${w}px]`
        }
        onMouseEnter={() => {
          handleHover("textIn")
        }}
        onMouseLeave={() => {
          handleHover("textOut")
        }}
      >
        {!movie.rating && (
          <h3
            className={`font-[900] text-[360px] italic cursor-default ${textStyle} `}
          >
            {idx + 1}
          </h3>
        )}
        <div
          style={{
            background: "url(" + movie.url + ")",
            backgroundSize: `${w}px ${h}px`,
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
          }}
          className={`outline-none ${
            movie.rating && styles
          } min-w-[${w}px] min-h-[${h}px]`}
          onMouseEnter={() => handleHover("imgIn")}
          onMouseLeave={() => handleHover("imgOut")}
        >
          {movie?.rating && (
            <div
              className={
                w === 398
                  ? "flex flex-row wrapper__image-rating w-[75px] h-[48px] text-white text-[28px] rounded-[12px] mt-[28px] ml-[28px]"
                  : "flex flex-row wrapper__image-rating w-[59px] h-[41px] text-white text-[24px] rounded-[8px] mt-[12px] ml-[12px]"
              }
            >
              <h3 className="text-center m-auto">{movie.rating}</h3>
            </div>
          )}
        </div>
        {movie.name && (
          <h3 className="text-2xl text-white mt-5">{movie.name}</h3>
        )}
      </article>
    </Link>
  )
}
