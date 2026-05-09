"use client";

import { useState } from "react";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Intégrer avec votre backend/service d'email
    console.log("Email soumis:", email);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section id="waitlist" className="bg-gradient-to-b from-white to-violet-50/30 py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-violet-200/50 bg-white/80 backdrop-blur-xl p-8 md:p-12 shadow-2xl shadow-violet-500/10">
          {/* Decorative gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-50/50 via-transparent to-purple-50/50 pointer-events-none" />

          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Soyez parmi les premiers
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Rejoignez la waitlist et bénéficiez d'un accès anticipé à OnScraper.
              <br />
              <span className="text-violet-600 font-medium">
                Bonus : 3 mois gratuits pour les 100 premiers inscrits
              </span>
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                required
                className="flex-1 px-6 py-4 rounded-full border border-violet-200/50 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
              />
              <button
                type="submit"
                disabled={submitted}
                className={`px-8 py-4 rounded-full font-medium text-white transition-all duration-200 shadow-lg whitespace-nowrap ${
                  submitted
                    ? "bg-green-500 shadow-green-500/30"
                    : "bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40"
                }`}
              >
                {submitted ? "✓ Inscrit !" : "Rejoindre"}
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-4">
              Pas de spam. Vous recevrez uniquement des nouvelles sur le lancement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
