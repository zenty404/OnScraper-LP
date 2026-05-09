"use client";
import { ContainerScroll } from "./container-scroll";
import { DemoAnimation } from "./demo-animation";
import { Highlighter } from "./ui/highlighter";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-white pt-16 md:pt-0">
      {/* Gradient background subtil */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white" />

      <ContainerScroll
        titleComponent={
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Votre environnement de prospection
              <br/>
              <Highlighter color="#93C5FD" isView={true}>
                réuni dans un seul outil.
              </Highlighter>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              OnScraper automatise votre prospection grâce à nos intégrations IA.
              <br></br>
              Recherchez, enrichissez et gérez vos prospects qualifiés en un seul endroit.
            </p>

            {/* CTA avec badge */}
            <div className="relative flex items-center justify-center gap-8">
              <button className="px-8 py-4 bg-[#092B7E] text-white rounded-full font-medium text-lg hover:bg-[#0D3AA1] transition-all duration-200 cursor-pointer">
                Rejoindre la waitlist
              </button>

              {/* Badge pointing to demo */}
              <div className="hidden lg:block absolute right-[-175px] top-[-100px]">
                <div className="relative">
                  {/* Badge box */}
                  <div className="text-[#1D1D1E] font-semibold bg-white border border-gray-200 py-[20px] px-[32px] rounded-[22px] shadow-lg transform -rotate-6 transition-transform duration-100 hover:rotate-6 tracking-[-0.48px] flex items-center gap-3">
                    <span>Créé par</span>
                    <Image src="/shift_logo.svg" alt="Shift Agency logo" width={40} height={40} className="h-10 w-10" />
                    <span>Shift Agency</span>
                  </div>
                  {/* Arrow */}
                  <svg
                    className="absolute left-[-20px] top-[88px]"
                    width="54"
                    height="77"
                    viewBox="0 0 54 77"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M53.4954 0.904288C53.4425 0.354538 52.954 -0.0482695 52.4043 0.00459099C51.8545 0.0574515 51.4517 0.545963 51.5046 1.09571L53.4954 0.904288ZM0.0852113 71.0961C-0.137875 71.6013 0.0908434 72.1917 0.596067 72.4148L8.82917 76.0502C9.33439 76.2733 9.9248 76.0445 10.1479 75.5393C10.371 75.0341 10.1423 74.4437 9.63703 74.2206L2.31872 70.9891L5.55018 63.6708C5.77327 63.1656 5.54455 62.5752 5.03933 62.3521C4.5341 62.129 3.94369 62.3577 3.72061 62.863L0.0852113 71.0961ZM51.5046 1.09571C52.7395 13.9392 50.9809 27.0288 43.4894 39.0202C35.996 51.0145 22.6964 62.0227 0.63877 70.5675L1.36123 72.4325C23.7036 63.7773 37.404 52.5355 45.1856 40.0798C52.9691 27.6212 54.7605 14.0608 53.4954 0.904288L51.5046 1.09571Z" fill="#1D1D1E"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        }
      >
        <DemoAnimation />
      </ContainerScroll>
    </div>
  );
}
