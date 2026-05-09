"use client";

import { DollarSign, UserX, Clock, AlertTriangle } from "lucide-react";
import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";
import { Highlighter } from "@/components/ui/highlighter";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

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
    <section className="relative bg-gray-50 py-6 md:py-12 overflow-hidden">
      {/* Background decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 relative">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              On comprend <Highlighter color="#93C5FD" isView={true}>vos défis</Highlighter>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              En tant que dirigeant d'agence, vous faites face à des défis quotidiens qui vont bien au-delà de la simple technique
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <ScrollReveal delay={0.1}>
          <BentoGrid items={painItems} />
        </ScrollReveal>

        {/* Transition to solution */}
        <ScrollReveal delay={0.2}>
          <div className="text-center mt-16">
            <div className="inline-block relative w-full max-w-5xl">
              <div className="absolute inset-0 bg-[#092B7E]/10 blur-xl rounded-full" />
              <div className="relative bg-white rounded-3xl p-12 md:p-16 shadow-2xl shadow-[#092B7E]/20 border border-gray-200">
                <h3 className="text-3xl md:text-4xl font-bold text-[#092B7E] mb-6">
                  Et si vous pouviez enfin vous concentrer sur <Highlighter color="#93C5FD" isView={true}>ce qui compte vraiment</Highlighter> ?
                </h3>
                <p className="text-[#092B7E] text-xl max-w-3xl mx-auto">
                  OnScraper automatise la partie la plus chronophage de votre prospection, vous libérant du temps pour développer votre business et servir vos clients.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
