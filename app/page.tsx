"use client"
import Image from "next/image"
import { TheMovieCard } from "../components/TheMovieCard"
import { TheNavbar } from "@/components/TheNavbar"
import { newMovies, topMovies } from "../public/data"

export default function Home() {
  return (
    <div className="wrapper__promo-image wrapper__bg-styles flex flex-col">
      <TheNavbar />
      <main className="flex flex-col mt-[294px]">
        <section className="flex flex-col ml-[517px] mx-auto max-w-[886px] ">
          <div className="mx-auto z-10">
            <Image
              src="/promo-title.webp"
              alt="title"
              width={576}
              height={228}
            />
          </div>
          <h1 className="text-white text-center text-4xl font-medium line-h mx-auto mt-[36px]">
            Неувядающий авантюрист и пытливый археолог-исследователь по‑прежнему
            в седле.
          </h1>
          <div className="flex flex-row mx-auto mt-[36px]">
            <button className="wrapper__button mr-6">Смотреть</button>
            <button className="wrapper__button">О фильме</button>
          </div>
        </section>
        <section className="flex flex-col min-w-[1724px] ml-[215px] mb-[110px] mt-[71px]">
          <h2 className="text-white text-[40px]">Новинки</h2>
          <div className="flex flex-row h-[653px] w-[1724px]">
            {newMovies.map((e, idx) => (
              <article
                key={idx}
                className="min-w-[398px] min-h-[597px] flex flex-row mr-6 items-center"
              >
                <TheMovieCard movie={e} idx={idx} w={398} h={597} />
              </article>
            ))}
          </div>
        </section>
        <section className="flex flex-col w-[6730px] h-[668px] ml-[215px]">
          <div className="flex flex-row items-center mb-6">
            <h2 className="outline-text font-[900] italic text-[52px] pr-5">
              ТОП-10
            </h2>
            <h2 className="text-white font-[700] text-[40px] ">
              просмотров за неделю
            </h2>
          </div>
          <div className="flex flex-row pb-[203px]">
            {topMovies.map((e, idx) => (
              <div
                key={idx}
                className="w-[559px] h-[597px] flex flex-row mr-[100px] items-center"
              >
                <TheMovieCard movie={e} idx={idx} w={398} h={597} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
