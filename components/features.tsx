import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MapPin, Database, Users } from "lucide-react";

export function Features() {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50/30 py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Tout ce dont vous avez besoin
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une solution complète pour transformer votre prospection
          </p>
        </div>

        {/* Grid */}
        <div className="mx-auto grid gap-2 sm:grid-cols-5">
          {/* Card 1 - Large left */}
          <Card className="group overflow-hidden shadow-lg shadow-blue-500/5 border-blue-200/50 bg-white/80 backdrop-blur-sm sm:col-span-3 sm:rounded-none sm:rounded-tl-xl hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
            <CardHeader>
              <div className="md:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <MapPin className="w-6 h-6 text-[#092B7E]" />
                  </div>
                  <p className="font-semibold text-lg text-gray-900">
                    Recherche Google Maps
                  </p>
                </div>
                <p className="text-gray-600 mt-3 max-w-sm text-sm">
                  Trouvez des prospects qualifiés en quelques secondes grâce à
                  notre moteur de recherche connecté à Google Maps et Places.
                </p>
              </div>
            </CardHeader>

            <div className="relative h-fit pl-6 md:pl-12">
              <div className="absolute -inset-6 [background:radial-gradient(75%_95%_at_50%_0%,transparent,white_100%)]"></div>

              <div className="bg-gradient-to-br from-blue-50 to-white overflow-hidden rounded-tl-lg border-l border-t border-blue-200/50 pl-2 pt-2">
                <div className="bg-white rounded-lg p-8 border border-blue-100">
                  <div className="space-y-4">
                    <div className="h-3 bg-blue-200/50 rounded w-3/4"></div>
                    <div className="h-3 bg-blue-200/30 rounded w-1/2"></div>
                    <div className="h-3 bg-blue-200/20 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Card 2 - Top right */}
          <Card className="group overflow-hidden shadow-lg shadow-blue-500/5 border-blue-200/50 bg-white/80 backdrop-blur-sm sm:col-span-2 sm:rounded-none sm:rounded-tr-xl hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
            <p className="mx-auto my-6 max-w-md text-balance px-6 text-center text-lg font-semibold sm:text-xl md:p-6">
              Interface intuitive pour une prise en main rapide
            </p>

            <CardContent className="mt-auto h-fit">
              <div className="relative mb-6 sm:mb-0">
                <div className="absolute -inset-6 [background:radial-gradient(50%_75%_at_75%_50%,transparent,white_100%)]"></div>
                <div className="aspect-[4/3] overflow-hidden rounded-r-lg border border-blue-200/50 bg-gradient-to-br from-blue-50 to-white p-6">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-20 bg-blue-200/30 rounded-lg"></div>
                    <div className="h-20 bg-blue-200/20 rounded-lg"></div>
                    <div className="h-20 bg-blue-200/20 rounded-lg"></div>
                    <div className="h-20 bg-blue-200/30 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 3 - Bottom left */}
          <Card className="group p-6 shadow-lg shadow-blue-500/5 border-blue-200/50 bg-white/80 backdrop-blur-sm sm:col-span-2 sm:rounded-none sm:rounded-bl-xl md:p-12 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Database className="w-6 h-6 text-[#092B7E]" />
              </div>
            </div>
            <p className="mx-auto mb-12 max-w-md text-balance text-left text-lg font-semibold sm:text-xl">
              Enrichissement automatique des données
            </p>

            <div className="flex justify-start gap-4">
              <div className="flex flex-col gap-2">
                <div className="h-12 w-24 bg-blue-200/30 rounded-lg"></div>
                <div className="h-12 w-24 bg-blue-200/20 rounded-lg"></div>
                <div className="h-12 w-24 bg-blue-200/40 rounded-lg"></div>
              </div>
            </div>
          </Card>

          {/* Card 4 - Bottom right */}
          <Card className="group relative shadow-lg shadow-blue-500/5 border-blue-200/50 bg-white/80 backdrop-blur-sm sm:col-span-3 sm:rounded-none sm:rounded-br-xl hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
            <CardHeader className="p-6 md:p-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Users className="w-6 h-6 text-[#092B7E]" />
                </div>
                <p className="font-semibold text-lg text-gray-900">CRM intégré</p>
              </div>
              <p className="text-gray-600 mt-2 max-w-sm text-sm">
                Gérez vos prospects avec un CRM léger : statuts, listes
                personnalisées, export CSV.
              </p>
            </CardHeader>
            <CardContent className="relative h-fit px-6 pb-6 md:px-12 md:pb-12">
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-lg aspect-square border border-blue-200/50 bg-blue-50/50 flex items-center justify-center">
                  <span className="text-xs text-[#092B7E] font-medium">Nouveau</span>
                </div>
                <div className="rounded-lg aspect-square border border-blue-200/50 bg-blue-100/50 flex items-center justify-center">
                  <span className="text-xs text-[#092B7E] font-medium">Contact</span>
                </div>
                <div className="rounded-lg aspect-square border border-blue-200/50 bg-blue-50/50 flex items-center justify-center">
                  <span className="text-xs text-[#092B7E] font-medium">Qualifié</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
