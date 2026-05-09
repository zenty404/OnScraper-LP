"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MapPin, Database, Users, Search, Phone, Star, TrendingUp } from "lucide-react";
import { Highlighter } from "@/components/ui/highlighter";

export function Features() {
  return (
    <section className="bg-gray-50 py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            <Highlighter color="#93C5FD" isView={true}>Tout ce dont vous avez besoin</Highlighter>
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
                    Recherche de prospects.
                  </p>
                </div>
                <p className="text-gray-600 mt-3 max-w-sm text-sm">
                  Trouvez des prospects qualifiés en quelques secondes grâce à
                  notre moteur de recherche connecté à une base de données de + de 100 millions de leads.
                </p>
              </div>
            </CardHeader>

            <div className="relative h-fit pl-6 md:pl-12 pb-6">
              <div className="absolute -inset-6 [background:radial-gradient(75%_95%_at_50%_0%,transparent,white_100%)]"></div>

              <div className="bg-gradient-to-br from-blue-50 to-white overflow-hidden rounded-tl-lg border-l border-t border-blue-200/50 pl-2 pt-2">
                <div className="bg-white rounded-lg p-4 md:p-6 border border-blue-100">
                  {/* Search bar mini */}
                  <div className="relative bg-gray-50 rounded-lg border border-gray-200 p-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Search className="w-4 h-4 text-gray-400" />
                      <div className="h-2 bg-blue-200/60 rounded w-32 animate-pulse"></div>
                    </div>
                  </div>

                  {/* Mini results */}
                  <div className="space-y-2">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="bg-white rounded-lg p-3 border-l-2 border-l-[#092B7E] border border-gray-100 shadow-sm animate-fadeInUp"
                        style={{ animationDelay: `${i * 0.2}s`, opacity: 0, animationFillMode: 'forwards' }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <div className="h-2 bg-gray-900 rounded w-24"></div>
                          <div className="px-2 py-0.5 bg-blue-50 rounded text-[10px] text-[#092B7E] font-medium">
                            Qualifié
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-gray-600">
                          <div className="flex items-center gap-1">
                            <Phone className="w-3 h-3 text-[#092B7E]" />
                            <div className="h-1.5 bg-gray-300 rounded w-16"></div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <div className="h-1.5 bg-gray-300 rounded w-6"></div>
                          </div>
                        </div>
                      </div>
                    ))}
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
                <div className="aspect-[4/3] overflow-hidden rounded-r-lg border border-blue-200/50 bg-gradient-to-br from-blue-50 to-white p-4">
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: "Prospects", value: "1.2K", delay: "0s" },
                      { label: "Qualifiés", value: "234", delay: "0.1s" },
                      { label: "Contactés", value: "89", delay: "0.2s" },
                      { label: "Convertis", value: "34", delay: "0.3s" },
                    ].map((stat, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 animate-fadeInUp"
                        style={{ animationDelay: stat.delay, opacity: 0, animationFillMode: 'forwards' }}
                      >
                        <p className="text-[10px] text-gray-600 mb-1">{stat.label}</p>
                        <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                        <div className="mt-1.5 h-1 rounded-full bg-[#092B7E]"></div>
                      </div>
                    ))}
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
            <p className="mx-auto max-w-md text-balance text-left text-lg font-semibold sm:text-xl">
              Enrichissement automatique des données via <span className="text-[#092B7E]">Shift IA</span>.
            </p>
            <p className="text-gray-600 mt-3 mb-4 max-w-sm text-sm">
                  Plus vous utilisez l'outil, plus il devient puissant et rapide.
            </p>

            <div className="space-y-3">
              {[
                { label: "Email", status: "complete", delay: "0s" },
                { label: "Téléphone", status: "enriching", delay: "0.3s" },
                { label: "Site web", status: "pending", delay: "0.6s" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 flex items-center justify-between animate-fadeInUp"
                  style={{ animationDelay: item.delay, opacity: 0, animationFillMode: 'forwards' }}
                >
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-[#092B7E] rounded-full"></div>
                    <span className="text-sm text-gray-700 font-medium">{item.label}</span>
                  </div>
                  {item.status === "complete" && (
                    <div className="text-xs text-green-600 font-medium">✓</div>
                  )}
                  {item.status === "enriching" && (
                    <div className="w-3 h-3 border-2 border-[#092B7E] border-t-transparent rounded-full animate-spin"></div>
                  )}
                  {item.status === "pending" && (
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"></div>
                  )}
                </div>
              ))}
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
                Gérez vos prospects avec un Dashboard intuitif.
              </p>
            </CardHeader>
            <CardContent className="relative h-fit px-6 pb-6 md:px-12 md:pb-12">
              <div className="space-y-2">
                {[
                  { name: "Garage Pro", status: "Nouveau", color: "blue", delay: "0s" },
                  { name: "Auto Center", status: "Contacté", color: "orange", delay: "0.2s" },
                  { name: "Meca Plus", status: "Qualifié", color: "green", delay: "0.4s" },
                ].map((prospect, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg p-3 border border-gray-100 shadow-sm animate-fadeInUp"
                    style={{ animationDelay: prospect.delay, opacity: 0, animationFillMode: 'forwards' }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="h-2 bg-gray-900 rounded w-20"></div>
                          <span className={`px-2 py-0.5 text-[10px] font-medium rounded-full ${
                            prospect.color === 'blue' ? 'bg-blue-50 text-blue-700' :
                            prospect.color === 'orange' ? 'bg-orange-50 text-orange-700' :
                            'bg-green-50 text-green-700'
                          }`}>
                            {prospect.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Phone className="w-3 h-3 text-[#092B7E]" />
                          <div className="h-1.5 bg-gray-300 rounded w-16"></div>
                        </div>
                      </div>
                      <div className="w-6 h-6 bg-[#092B7E] rounded flex items-center justify-center">
                        <TrendingUp className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
