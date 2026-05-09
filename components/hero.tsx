"use client";
import { ContainerScroll } from "./container-scroll";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-white pt-16 md:pt-0">
      {/* Gradient background subtil */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-50/50 via-white to-white" />

      <ContainerScroll
        titleComponent={
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6">
              Trouvez vos prospects
              <br />
              en quelques clics
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              OnScraper by Shift automatise votre prospection via Google Maps.
              Recherchez, enrichissez et gérez vos prospects qualifiés en un seul endroit.
            </p>
            <button className="group relative px-8 py-4 bg-violet-600 text-white rounded-full font-medium text-lg hover:bg-violet-700 transition-all duration-200 shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40">
              <span className="relative z-10">Rejoindre la waitlist</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </button>
          </div>
        }
      >
        <div className="relative w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
          <div className="text-center text-gray-400">
            <p className="text-sm">Interface OnScraper</p>
            <p className="text-xs mt-2">Screenshot à venir</p>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}
