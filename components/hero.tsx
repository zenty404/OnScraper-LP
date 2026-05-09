"use client";
import { ContainerScroll } from "./container-scroll";
import { DemoAnimation } from "./demo-animation";
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
              réuni dans un seul outil.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              OnScraper by Shift automatise votre prospection grâce à nos intégrations IA.
              <br></br>
              Recherchez, enrichissez et gérez vos prospects qualifiés en un seul endroit.
            </p>
            <button className="px-8 py-4 bg-[#092B7E] text-white rounded-full font-medium text-lg hover:bg-[#0D3AA1] transition-all duration-200">
              Rejoindre la waitlist
            </button>
          </div>
        }
      >
        <DemoAnimation />
      </ContainerScroll>
    </div>
  );
}
