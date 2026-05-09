"use client";

import { DollarSign, UserX, Clock, AlertTriangle } from "lucide-react";
import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";

export function PainPoints() {
  const painItems: BentoItem[] = [
    {
      title: "L'angoisse financière",
      description: "La peur de ne pas générer de revenus ce mois-ci. Cette angoisse immédiate paralyse vos décisions et vous empêche de vous concentrer sur la croissance.",
      icon: <DollarSign className="w-6 h-6 text-white" />,
      meta: "73%",
      tags: ["Trésorerie", "Stress"],
      status: "des Freelances et Agences concernées",
    },
    {
      title: "La peur de prospecter",
      description: "Peur de déranger, syndrome de l'imposteur, peur du refus. Ces blocages psychologiques vous empêchent d'atteindre vos objectifs commerciaux.",
      icon: <UserX className="w-6 h-6 text-white" />,
      meta: "68%",
      tags: ["Blocage", "Psychologique"],
      status: "évitent la prospection",
    },
    {
      title: "La frustration du manuel",
      description: "Tâches répétitives et chronophages de recherche de clients. Votre temps précieux est gaspillé dans des actions sans valeur ajoutée.",
      icon: <Clock className="w-6 h-6 text-white" />,
      meta: "20h",
      tags: ["Temps perdu", "Répétitif"],
      status: "de perdue par semaine en moyenne",
    },
    {
      title: "La crainte d'investir",
      description: "Peur de dépenser dans des outils sans garantie de résultats. Vous hésitez à investir par peur de perdre votre argent.",
      icon: <AlertTriangle className="w-6 h-6 text-white" />,
      meta: "82%",
      tags: ["Investissement", "ROI"],
      status: "hésitent à s'équiper",
    },
  ];

  return (
    <section className="relative bg-gray-50 py-16 md:py-32 overflow-hidden">
      {/* Background decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            On comprend vos défis
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            En tant que dirigeant d'agence, vous faites face à des défis quotidiens qui vont bien au-delà de la simple technique
          </p>
        </div>

        {/* Bento Grid */}
        <BentoGrid items={painItems} />

        {/* Transition to solution */}
        <div className="text-center mt-16">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-[#092B7E]/10 blur-xl rounded-full" />
            <div className="relative bg-gradient-to-r from-[#092B7E] to-[#0D3AA1] rounded-2xl p-8 md:p-12 shadow-2xl shadow-[#092B7E]/20">
              <h3 className="text-2xl md:text-2xl font-bold text-white mb-4">
                Et si vous pouviez enfin vous concentrer sur ce qui compte vraiment ?
              </h3>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-6">
                OnScraper automatise la partie la plus chronophage de votre prospection, vous libérant du temps pour développer votre business et servir vos clients.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-blue-100">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>Simple et intuitif</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>Résultats immédiats</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>IA embarquée </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
