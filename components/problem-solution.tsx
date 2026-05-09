export function ProblemSolution() {
  return (
    <section className="bg-white py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Problème */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-red-500/20 to-transparent rounded-full" />
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-red-50 border border-red-200/50 rounded-full text-sm font-medium text-red-700">
                Le problème
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                La prospection manuelle,
                <br />
                un gouffre de temps
              </h3>
              <div className="space-y-3 text-gray-600">
                <p className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>
                    Des heures perdues à chercher des prospects sur Google Maps
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Copier-coller manuel des coordonnées, un par un</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Données dispersées dans plusieurs fichiers Excel</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Impossible de suivre l'avancement de vos campagnes</span>
                </p>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500/40 to-transparent rounded-full" />
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-blue-50 border border-blue-200/50 rounded-full text-sm font-medium text-[#0D3AA1]">
                La solution
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                OnScraper by Shift automatise
                <br />
                tout le processus
              </h3>
              <div className="space-y-3 text-gray-600">
                <p className="flex items-start gap-3">
                  <span className="text-[#092B7E] mt-1">✓</span>
                  <span>
                    Recherchez des centaines de prospects en quelques secondes
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-[#092B7E] mt-1">✓</span>
                  <span>
                    Enrichissement automatique des données et traitement en un clic.
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-[#092B7E] mt-1">✓</span>
                  <span>
                    Centralisez tout dans votre tableau de bord intuitif
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-[#092B7E] mt-1">✓</span>
                  <span>
                    Suivez vos prospects par statut et exportez en un clic
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-1 bg-gradient-to-r from-[#092B7E] to-[#092B7E] rounded-full">
            <div className="bg-white rounded-full px-8 py-4">
              <p className="text-lg font-semibold bg-gradient-to-r from-[#092B7E] to-[#092B7E] bg-clip-text text-transparent">
                Gagnez jusqu'à 20 heures par semaine
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
