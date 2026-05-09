"use client";

import { Clock, X, Check, ArrowRight } from "lucide-react";

export function ProblemSolution() {
  return (
    <section className="relative bg-white py-16 md:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gray-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Transformez votre prospection
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            De la prospection manuelle chronophage à l'automatisation intelligente
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Problème - Card style with shadow */}
          <div className="group relative h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-500/10 to-gray-400/5 rounded-2xl" />
            <div className="relative h-full flex flex-col bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-sm font-semibold text-gray-700 mb-6">
                <X className="w-4 h-4" />
                Le problème
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                La prospection manuelle,
                <br />
                <span className="text-gray-600">un gouffre de temps</span>
              </h3>

              {/* Pain points with icons */}
              <div className="space-y-4 flex-1">
                {[
                  "Des heures perdues à chercher des prospects sur Google Maps",
                  "Copier-coller manuel des coordonnées, un par un",
                  "Données dispersées dans plusieurs fichiers Excel",
                  "Impossible de suivre l'avancement de vos campagnes"
                ].map((pain, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <div className="shrink-0 w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                      <X className="w-4 h-4 text-gray-600" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">{pain}</span>
                  </div>
                ))}
              </div>

              {/* Time waste indicator */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">Temps perdu moyen</span>
                  <span className="text-2xl font-bold text-gray-900">20h/semaine</span>
                </div>
              </div>
            </div>
          </div>

          {/* Solution - Card style with shadow */}
          <div className="group relative h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-2xl" />
            <div className="relative h-full flex flex-col bg-white/80 backdrop-blur-sm border-2 border-blue-200/50 rounded-2xl p-8 shadow-lg">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-semibold text-[#0D3AA1] mb-6">
                <Check className="w-4 h-4" />
                La solution
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                OnScraper automatise
                <br />
                <span className="text-[#092B7E]">tout via Shift IA</span>
              </h3>

              {/* Benefits with icons */}
              <div className="space-y-4 flex-1">
                {[
                  "Recherchez des centaines de prospects en quelques secondes",
                  "Enrichissement automatique des données via IA et traitement en un clic",
                  "Centralisez tout dans votre tableau de bord intuitif",
                  "Suivez vos prospects par statut et exportez en un clic"
                ].map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 bg-blue-50/50 rounded-lg border border-blue-100/50"
                  >
                    <div className="shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-[#092B7E]" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Time saved indicator */}
              <div className="mt-6 pt-6 border-t border-blue-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">Temps économisé</span>
                  <span className="text-2xl font-bold text-[#092B7E]">20h/semaine</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA with arrow */}
        <div className="mt-16 text-center">
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#092B7E] to-[#0D3AA1] text-white rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300">
            Gagnez jusqu'à 20 heures par semaine
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
