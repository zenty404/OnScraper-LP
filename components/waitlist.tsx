"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Highlighter } from "@/components/ui/highlighter";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Intégrer avec votre backend/service d'email
    console.log("Email soumis:", email, "LinkedIn:", linkedin);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
      setLinkedin("");
    }, 3000);
  };

  // Avatars avec initiales colorées en bleu Shift
  const avatars = [
    { initials: "AB", gradient: "from-[#092B7E] to-[#0D3AA1]" },
    { initials: "CD", gradient: "from-blue-400 to-blue-500" },
    { initials: "EF", gradient: "from-blue-500 to-[#092B7E]" },
    { initials: "GH", gradient: "from-[#092B7E] to-blue-600" },
    { initials: "IJ", gradient: "from-blue-600 to-[#092B7E]" },
  ];

  return (
    <section id="waitlist" className="bg-white py-16 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        {/* Card container with border */}
        <div className="border-2 border-gray-200 rounded-3xl p-8 md:p-12 shadow-lg bg-gradient-to-b from-white to-gray-50/30">
          {/* Avatars row */}
          <div className="flex items-center justify-center mb-12">
          <div className="flex items-center -space-x-3">
            {avatars.map((avatar, i) => (
              <div
                key={i}
                className={`flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${avatar.gradient} border-2 border-white shadow-lg text-white font-medium text-sm`}
              >
                {avatar.initials}
              </div>
            ))}
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white border-2 border-blue-200 shadow-lg text-gray-900 font-bold text-sm ml-2">
              +50
            </div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-center tracking-tight">
          Prenez <Highlighter color="#93C5FD" isView={true}>une longueur d'avance.</Highlighter>
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Rejoignez +50 freelances et dirigeants d'agence sur la liste d'attente pour notre accès anticipé.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre email pro..."
            required
            className="w-full px-8 py-6 rounded-2xl bg-gray-50 border-0 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-lg"
          />

          <input
            type="url"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            placeholder="URL LinkedIn (Optionnel)"
            className="w-full px-8 py-6 rounded-2xl bg-gray-50 border-0 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-lg"
          />

          <button
            type="submit"
            disabled={submitted}
            className={`w-full px-8 py-4 rounded-xl font-medium text-white text-lg transition-all duration-200 ${
              submitted
                ? "bg-green-500"
                : "bg-[#092B7E] hover:bg-[#0D3AA1]"
            }`}
          >
            {submitted ? (
              "✓ Vous êtes inscrit !"
            ) : (
              "Rejoindre la liste d'attente"
            )}
          </button>
        </form>
        </div>
      </div>
    </section>
  );
}
