"use client"

import { TheNavbar } from "@/components/TheNavbar"
import Image from "next/image"
import { wednesday, wednesdayEpisodes, similar } from "../../public/data"
import { TheSeriesCard } from "@/components/TheSeriesCard"
import { TheMovieCard } from "@/components/TheMovieCard"

export default function Home() {
  return (
    <div className="wrapper__series-image wrapper__bg-styles flex flex-col h-[2000px] font-[TT_Norms_Pro] leading-[normal]">
      <TheNavbar />
      <main className="flex flex-col mt-[90px]">
        <section className="flex flex-col ml-[215px] max-w-[735px] mb-[112px]">
          <div className="flex flex-row">
            <Image
              src={wednesday.url1}
              alt="Series name"
              width={209.772}
              height={127.865}
            />
            <Image
              src={wednesday.url2}
              alt="Series name"
              width={158.201}
              height={132}
            />
          </div>
          <div className="flex flex-row mt-[32.36px] items-center *:mr-8 mb-5">
            <div className="flex mb-auto text-[28px] text-white  rounded-[20px] w-[75px] h-[48px] bg-[#FFF]/[0.2]">
              <h3 className="text-center m-auto">{wednesday.rating}</h3>
            </div>
            <h3 className="text-[28px] font-[400] text-white ">
              {wednesday.year}
            </h3>
            <h3 className="text-[28px] font-[400] text-white ">
              {wednesday.season}
            </h3>
            <h3 className="text-[28px] font-[400] text-white ">
              {wednesday.country}
            </h3>
            <h3 className="text-[28px] font-[400] text-white ">
              {wednesday.style}
            </h3>
            <h3 className="text-[28px] font-[400] text-white ">
              {wednesday.age}
            </h3>
          </div>
          <h2 className="text-[28px] text-white mb-[112px]">
            {wednesday.shortDescription}
          </h2>
          <div className="flex flex-row items-start ">
            <button className="wrapper__blur-button text-[30px] text-white rounded-[16px] w-[160px] h-[80px] mr-4">
              <h3 className="text-center m-auto">Смотреть</h3>
            </button>
            <button className="wrapper__blur-button text-[30px] text-white rounded-[16px] w-[160px] h-[80px] mr-4">
              <h3 className="text-center m-auto">Трейлер</h3>
            </button>
            <button className="wrapper__blur-button text-[30px] text-white rounded-[16px] w-[96px] h-[80px] mr-4">
              <Image
                className="text-center m-auto"
                src="/favorite.svg"
                width={32}
                height={32}
                alt="watch later"
              />
            </button>
            <button className="wrapper__blur-button text-[30px] text-white rounded-[16px] w-[96px] h-[80px] mr-4">
              <Image
                className="text-center m-auto"
                src="/heart.svg"
                width={32}
                height={32}
                alt="favorite"
              />
            </button>
          </div>
        </section>
        <section className="flex flex-col ml-[215px] max-w-[2236px] mb-[60px]">
          <div className="flex flex-row items-center content-center">
            <div className="text-[40px] font-[700] text-white mr-11">
              <h3 className="text-center m-auto">Сезоны</h3>
            </div>
            <button className="w-10 h-10 mr-[20px] text-[#BABABA] text-[24px] bg-[#232326] rounded-[100px] hover:bg-[#BABABA] hover:text-white active:bg-white active:text-black ease-linear transition-all">
              <h4 className="text-center m-auto">1</h4>
            </button>
            <button className="w-10 h-10 mr-[20px] text-[#BABABA] text-[24px] bg-[#232326] self-center rounded-[100px] hover:bg-[#BABABA] hover:text-white active:bg-white active:text-black ease-linear transition-all">
              <h4 className="text-center m-auto">2</h4>
            </button>
            <button className="w-10 h-10 mr-[20px] text-[#BABABA] text-[24px] bg-[#232326] rounded-[100px] hover:bg-[#BABABA] hover:text-white active:bg-white active:text-black ease-linear transition-all">
              <h4 className="text-center m-auto">3</h4>
            </button>
          </div>
          <div className="flex flex-row mt-6 mb-[60px]">
            {wednesdayEpisodes.map((e, idx) => (
              <TheSeriesCard idx={idx} episode={e} />
            ))}
          </div>
          <article className="flex flex-col w-[1641px]">
            <h2 className="font-[700] text-[40px] text-white mb-6">Описание</h2>
            <h2 className="font-[400] text-[30px] text-white mb-6 font-sty">
              {wednesday.fullDescription}
            </h2>
            <div className="flex flex-row items-start content-start">
              <Image
                className="mr-5"
                src="/warning.svg"
                width={48}
                height={48}
                alt="watch later"
              />
              <h4 className="font-[400] text-[28px] text-[#4B4B4B]">
                {wednesday.disclaimer}
              </h4>
            </div>
          </article>
        </section>
        <section className="flex flex-col max-w-[1929px] ml-[215px] mb-[60px]">
          <h2 className="text-white text-[40px] font-[700] mb-6">Похожее</h2>
          <div className="flex flex-row w-[1724px]">
            {similar.map((e, idx) => (
              <article
                key={idx}
                className="min-w-[255px] min-h-[382px] flex flex-row mr-6 items-center"
              >
                <TheMovieCard movie={e} idx={idx} w={255} h={382} />
              </article>
            ))}
          </div>
        </section>
        <section className="flex flex-col ml-[215px] max-w-[2236px] mb-[60px] pb-[119px]">
          <h2 className="font-[700] text-[40px] text-white mb-6">Описание</h2>
          <div className="flex flex-row">
            <div className="mr-[100px] flex flex-col text-[28px] font-[400]">
              <h3 className="text-[#FFF]/[0.3] mb-4">Премьера в мире</h3>
              <h3 className="text-white mb-[25px]">31 октября 2022</h3>
              <h3 className="text-[#FFF]/[0.3] mb-4">Оригинальное название</h3>
              <h3 className="text-white">Wednesday</h3>
            </div>
            <div className="mr-[100px] flex flex-col text-[28px] font-[400]">
              <h3 className="text-[#FFF]/[0.3] mb-4">Страна</h3>
              <h3 className="text-white mb-[25px]">США</h3>
              <h3 className="text-[#FFF]/[0.3] mb-4">Жанры</h3>
              <h3 className="text-white">
                Фентези, Комедия, Криминал, Детектив
              </h3>
            </div>
            <div className="flex flex-col text-[28px] font-[400]">
              <h3 className="text-[#FFF]/[0.3] mb-4">Язык аудиодорожки</h3>
              <h3 className="text-white mb-[25px]">Rus, Eng</h3>
              <h3 className="text-[#FFF]/[0.3] mb-4">Качество</h3>
              <h3 className="text-white wrapper__grey-button text-[30px] rounded-[8px] p-3 mr-4">
                Full HD
              </h3>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
