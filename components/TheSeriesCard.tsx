import Image from "next/image"

interface Episode {
  duration: string
  url: string
}

export const TheSeriesCard = ({
  episode,
  idx,
}: {
  episode: Episode
  idx: number
}) => {
  return (
    <article className="flex flex-col mr-5">
      <Image
        className="min-w-[544px] h-[306px] rounded-[20px] outline-none hover:outline-[#6a11cb] hover:rounded-[20px] hover:outline-4"
        src={episode.url}
        alt="episode"
        width={544}
        height={306}
      />
      <h3 className="text-[28px] text-white mt-10">{idx + 1} серия</h3>
      <h3 className="text-[24px] text-[#BABABA] mt-3">{episode.duration}</h3>
    </article>
  )
}
