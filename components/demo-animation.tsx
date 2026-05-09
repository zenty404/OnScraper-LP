"use client";

import { Search, MapPin, Phone, Star } from "lucide-react";

export function DemoAnimation() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-50 via-white to-blue-50/30 rounded-2xl p-6 md:p-8">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="flex items-center gap-3 p-4">
            <Search className="w-5 h-5 text-gray-400 shrink-0" />
            <div className="flex-1 relative">
              <span className="typing-text text-gray-900 font-medium">
                Agence Auto 77
              </span>
            </div>
            <button className="search-button px-6 py-2 bg-[#092B7E] text-white rounded-lg font-medium text-sm hover:bg-[#0D3AA1] transition-all shadow-md">
              Rechercher
            </button>
          </div>
        </div>
      </div>

      {/* Loading indicator */}
      <div className="loading-dots flex items-center gap-2 mb-4 opacity-0">
        <div className="w-2 h-2 bg-[#092B7E] rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
        <div className="w-2 h-2 bg-[#092B7E] rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
        <div className="w-2 h-2 bg-[#092B7E] rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
        <span className="text-sm text-gray-600 ml-2">Recherche en cours...</span>
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
            className="result-card bg-white rounded-lg p-4 shadow-md border border-gray-100 opacity-0"
            style={{ animationDelay: result.delay }}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">{result.name}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Phone className="w-4 h-4 text-[#092B7E]" />
                    <span>{result.phone}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{result.rating}</span>
                  </div>
                </div>
              </div>
              <div className="px-3 py-1 bg-red-50 text-red-700 text-xs font-medium rounded-full">
                Pas de site
              </div>
            </div>
          </div>
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

        .loading-dots {
          animation: slideDown 0.5s ease-out forwards;
          animation-delay: 2.5s;
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
      `}</style>
    </div>
  );
}
