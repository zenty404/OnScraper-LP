"use client";

import { useState, useEffect } from "react";
import { Search, MapPin, Phone, Star } from "lucide-react";

const demos = [
  {
    id: "search",
    label: "Recherche",
    query: "Agence Auto 77",
  },
  {
    id: "enrichment",
    label: "Enrichissement",
    query: "Restaurant Paris",
  },
  {
    id: "dashboard",
    label: "Dashboard",
    query: "Salon de coiffure Lyon",
  },
];

export function DemoAnimation() {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const currentDemo = demos[activeDemo];

  // Auto-play: change demo every 7 seconds
  useEffect(() => {
    if (isHovered) return; // Pause when hovering

    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % demos.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div
      className="w-full h-full bg-gradient-to-br from-gray-50 via-white to-blue-50/30 rounded-2xl p-6 md:p-8 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Démo Recherche */}
      {activeDemo === 0 && (
        <>
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="flex items-center gap-3 p-4">
                <Search className="w-5 h-5 text-gray-400 shrink-0" />
                <div className="flex-1 relative">
                  <span className="typing-text text-gray-900 font-medium" key={activeDemo}>
                    {currentDemo.query}
                  </span>
                </div>
                <button className="search-button px-6 py-2 bg-[#092B7E] text-white rounded-lg font-medium text-sm hover:bg-[#0D3AA1] transition-all shadow-md cursor-pointer">
                  Rechercher
                </button>
              </div>
            </div>
          </div>

          {/* Filter Badge */}
          <div className="filter-badge flex items-center justify-between mb-4 opacity-0">
            <div className="flex items-center gap-2">
              <div className="px-4 py-2 bg-[#092B7E] text-white rounded-lg font-medium text-sm shadow-md flex items-center gap-2 border border-[#0D3AA1]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filtre : Sans site web uniquement
              </div>
              <span className="text-sm text-gray-600">→ Prospects qualifiés</span>
            </div>
          </div>

          {/* Loading indicator */}
          <div className="loading-dots flex items-center gap-2 mb-4 opacity-0">
            <div className="w-2 h-2 bg-[#092B7E] rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
            <div className="w-2 h-2 bg-[#092B7E] rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
            <div className="w-2 h-2 bg-[#092B7E] rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
            <span className="text-sm text-gray-600 ml-2">Filtrage des prospects sans site...</span>
          </div>

          {/* Results */}
          <div className="space-y-3">
            {[
              { name: "Garage Dupont", phone: "01 64 XX XX XX", rating: 4.2, delay: "0s" },
              { name: "Auto Services 77", phone: "01 60 XX XX XX", rating: 4.5, delay: "0.3s" },
              { name: "Meca Pro", phone: "01 64 XX XX XX", rating: 4.0, delay: "0.6s" },
              { name: "Carrosserie Martin", phone: "01 60 XX XX XX", rating: 4.7, delay: "0.9s" },
              { name: "Expert Auto", phone: "01 64 XX XX XX", rating: 4.3, delay: "1.2s" },
            ].map((result, i) => (
              <div
                key={i}
                className="result-card bg-white rounded-lg p-4 shadow-md border-l-4 border-l-[#092B7E] border-r border-t border-b border-gray-200 opacity-0"
                style={{ animationDelay: result.delay }}
              >
                <div className="flex items-start gap-3">
                  {/* Badge SANS SITE sobre */}
                  <div className="shrink-0">
                    <div className="px-3 py-1.5 bg-gray-100 text-gray-900 text-xs font-semibold rounded border-2 border-gray-300 flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                      </svg>
                      Sans site
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-gray-900">{result.name}</h3>
                      <span className="px-2 py-0.5 bg-blue-50 text-[#092B7E] text-xs font-medium rounded border border-blue-200">
                        Qualifié
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Phone className="w-4 h-4 text-[#092B7E]" />
                        <span className="font-medium">{result.phone}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{result.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Démo Enrichissement */}
      {activeDemo === 1 && (
        <>
          <div className="mb-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Enrichissement en cours...</h3>
              <div className="flex items-center gap-2">
                <div className="loading-spinner w-4 h-4 border-2 border-[#092B7E] border-t-transparent rounded-full animate-spin"></div>
                <span className="text-sm text-gray-600">3/5 prospects</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { name: "Le Bistrot Parisien", address: "12 Rue de Rivoli", status: "complete", delay: "0s" },
              { name: "Chez Marcel", address: "45 Bd Saint-Germain", status: "complete", delay: "0.5s" },
              { name: "La Table du Chef", address: "8 Rue Montmartre", status: "enriching", delay: "1s" },
              { name: "Le Gourmet", address: "23 Av. des Champs", status: "pending", delay: "1.5s" },
              { name: "Brasserie du Coin", address: "67 Rue de la Paix", status: "pending", delay: "2s" },
            ].map((result, i) => (
              <div
                key={i}
                className="enrich-card bg-white rounded-lg p-4 shadow-md border border-gray-100 opacity-0"
                style={{ animationDelay: result.delay }}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{result.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 text-[#092B7E]" />
                      <span>{result.address}</span>
                    </div>
                  </div>
                  {result.status === "complete" && (
                    <div className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                      ✓ Enrichi
                    </div>
                  )}
                  {result.status === "enriching" && (
                    <div className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full flex items-center gap-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                      En cours
                    </div>
                  )}
                  {result.status === "pending" && (
                    <div className="px-3 py-1 bg-gray-50 text-gray-500 text-xs font-medium rounded-full">
                      En attente
                    </div>
                  )}
                </div>
                {result.status === "complete" && (
                  <div className="enrich-data mt-3 pt-3 border-t border-gray-100 grid grid-cols-2 gap-2 text-xs opacity-0">
                    <div className="flex items-center gap-1 text-gray-600">
                      <Phone className="w-3 h-3 text-[#092B7E]" />
                      <span>01 42 XX XX XX</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span>4.{Math.floor(Math.random() * 5) + 2}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {/* Démo Dashboard */}
      {activeDemo === 2 && (
        <>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tableau de bord</h3>

            {/* Stats cards */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { label: "Total prospects", value: "1,247", color: "blue", delay: "0s" },
                { label: "À contacter", value: "89", color: "orange", delay: "0.2s" },
                { label: "Qualifiés", value: "34", color: "green", delay: "0.4s" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="stat-card bg-white rounded-lg p-4 shadow-md border border-gray-100 opacity-0"
                  style={{ animationDelay: stat.delay }}
                >
                  <p className="text-xs text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <div className={`mt-2 h-1 rounded-full ${
                    stat.color === 'blue' ? 'bg-[#092B7E]' :
                    stat.color === 'orange' ? 'bg-orange-500' :
                    'bg-green-500'
                  }`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Pipeline */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Pipeline en cours</h4>
            {[
              { name: "Garage Express", status: "Nouveau", statusColor: "blue", phone: "01 64 XX XX", delay: "0.6s" },
              { name: "Auto Center", status: "Contacté", statusColor: "orange", phone: "01 60 XX XX", delay: "0.8s" },
              { name: "Meca Services", status: "Qualifié", statusColor: "green", phone: "01 64 XX XX", delay: "1s" },
              { name: "Pro Garage", status: "En négo", statusColor: "purple", phone: "01 60 XX XX", delay: "1.2s" },
            ].map((prospect, i) => (
              <div
                key={i}
                className="pipeline-card bg-white rounded-lg p-4 shadow-md border border-gray-100 opacity-0"
                style={{ animationDelay: prospect.delay }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-gray-900">{prospect.name}</h3>
                      <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                        prospect.statusColor === 'blue' ? 'bg-blue-50 text-blue-700' :
                        prospect.statusColor === 'orange' ? 'bg-orange-50 text-orange-700' :
                        prospect.statusColor === 'green' ? 'bg-green-50 text-green-700' :
                        'bg-purple-50 text-purple-700'
                      }`}>
                        {prospect.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Phone className="w-4 h-4 text-[#092B7E]" />
                      <span>{prospect.phone}</span>
                    </div>
                  </div>
                  <button className="px-3 py-1.5 bg-[#092B7E] text-white text-xs font-medium rounded-lg hover:bg-[#0D3AA1] transition-all cursor-pointer">
                    Action
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Quick action */}
          <div className="quick-action mt-4 bg-gradient-to-r from-[#092B7E] to-[#0D3AA1] rounded-lg p-4 text-white opacity-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium mb-1">Exporter la sélection</p>
                <p className="text-xs text-blue-100">4 prospects sélectionnés</p>
              </div>
              <button className="px-4 py-2 bg-white text-[#092B7E] rounded-lg text-sm font-medium hover:bg-blue-50 transition-all cursor-pointer">
                CSV
              </button>
            </div>
          </div>
        </>
      )}

      {/* Navigation pills */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/90 backdrop-blur-md p-1 rounded-full shadow-lg border border-gray-200">
        {demos.map((demo, index) => (
          <button
            key={demo.id}
            onClick={() => setActiveDemo(index)}
            className={`px-6 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-500 ease-out ${
              activeDemo === index
                ? "bg-[#092B7E] text-white shadow-md scale-105"
                : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            }`}
          >
            {demo.label}
          </button>
        ))}
      </div>

      <style jsx>{`
        @keyframes typing {
          0%, 10% { width: 0; }
          90%, 100% { width: 100%; }
        }

        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .typing-text {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          animation: typing 2s steps(15) forwards;
          width: 0;
          position: relative;
        }

        .typing-text::after {
          content: "|";
          display: inline-block;
          animation: blink 1s step-end infinite;
          margin-left: 2px;
        }

        .search-button {
          animation: pulse 2s ease-in-out infinite;
          animation-delay: 2s;
        }

        .filter-badge {
          animation: slideDown 0.5s ease-out forwards;
          animation-delay: 2s;
        }

        .loading-dots {
          animation: slideDown 0.5s ease-out forwards;
          animation-delay: 2.7s;
        }

        .result-card {
          animation: fadeInUp 0.5s ease-out forwards;
          animation-delay: 3s;
        }

        .result-card:nth-child(1) {
          animation-delay: 3.2s;
        }

        .result-card:nth-child(2) {
          animation-delay: 3.5s;
        }

        .result-card:nth-child(3) {
          animation-delay: 3.8s;
        }

        .result-card:nth-child(4) {
          animation-delay: 4.1s;
        }

        .result-card:nth-child(5) {
          animation-delay: 4.4s;
        }

        /* Enrichment animations */
        .enrich-card {
          animation: fadeInUp 0.5s ease-out forwards;
        }

        .enrich-data {
          animation: fadeInUp 0.3s ease-out forwards;
          animation-delay: 0.5s;
        }

        /* Dashboard animations */
        .stat-card {
          animation: fadeInUp 0.5s ease-out forwards;
        }

        .pipeline-card {
          animation: fadeInUp 0.4s ease-out forwards;
        }

        .quick-action {
          animation: fadeInUp 0.5s ease-out forwards;
          animation-delay: 1.6s;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
