import { Check } from "lucide-react";
import {
  Card,
  Header,
  Plan,
  PlanName,
  Badge,
  Price,
  MainPrice,
  Period,
  Body,
  List,
  ListItem,
  Separator,
} from "@/components/ui/pricing-card";

export function Pricing() {
  return (
    <section className="bg-white py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Tarifs transparents
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choisissez le plan qui correspond à vos besoins
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <Card>
            <Header>
              <Plan>
                <PlanName>Free</PlanName>
              </Plan>
              <Price>
                <MainPrice>0€</MainPrice>
                <Period>/mois</Period>
              </Price>
            </Header>
            <Body>
              <List>
                <ListItem>
                  <Check className="size-4 text-[#092B7E] shrink-0" />
                  <span>50 recherches/mois</span>
                </ListItem>
                <ListItem>
                  <Check className="size-4 text-[#092B7E] shrink-0" />
                  <span>Données basiques</span>
                </ListItem>
                <ListItem>
                  <Check className="size-4 text-[#092B7E] shrink-0" />
                  <span>Export CSV</span>
                </ListItem>
              </List>

              <Separator>Passer à Pro pour</Separator>

              <List>
                <ListItem className="opacity-50">
                  <Check className="size-4 shrink-0" />
                  <span>Recherches illimitées</span>
                </ListItem>
                <ListItem className="opacity-50">
                  <Check className="size-4 shrink-0" />
                  <span>Enrichissement avancé</span>
                </ListItem>
                <ListItem className="opacity-50">
                  <Check className="size-4 shrink-0" />
                  <span>CRM complet</span>
                </ListItem>
              </List>

              <button className="w-full mt-6 px-8 py-4 bg-[#092B7E] text-white rounded-xl font-medium hover:bg-[#0D3AA1] transition-all duration-200 cursor-pointer">
                Commencer gratuitement
              </button>
            </Body>
          </Card>

          {/* Pro Plan - Recommended */}
          <Card className="border-blue-500/50 shadow-2xl shadow-blue-500/20 scale-105">
            <Header className="bg-gradient-to-br from-blue-100/80 to-blue-100/80">
              <Plan>
                <PlanName>Pro</PlanName>
                <Badge>Populaire</Badge>
              </Plan>
              <Price>
                <MainPrice>29€</MainPrice>
                <Period>/mois</Period>
              </Price>
            </Header>
            <Body>
              <List>
                <ListItem>
                  <Check className="size-4 text-[#092B7E] shrink-0" />
                  <span>Recherches illimitées</span>
                </ListItem>
                <ListItem>
                  <Check className="size-4 text-[#092B7E] shrink-0" />
                  <span>Enrichissement complet</span>
                </ListItem>
                <ListItem>
                  <Check className="size-4 text-[#092B7E] shrink-0" />
                  <span>CRM avec statuts</span>
                </ListItem>
                <ListItem>
                  <Check className="size-4 text-[#092B7E] shrink-0" />
                  <span>Listes personnalisées</span>
                </ListItem>
                <ListItem>
                  <Check className="size-4 text-[#092B7E] shrink-0" />
                  <span>Export CSV illimité</span>
                </ListItem>
                <ListItem>
                  <Check className="size-4 text-[#092B7E] shrink-0" />
                  <span>Support prioritaire</span>
                </ListItem>
              </List>

              <Separator>Passer à Agency pour</Separator>

              <List>
                <ListItem className="opacity-50">
                  <Check className="size-4 shrink-0" />
                  <span>Comptes multi-utilisateurs</span>
                </ListItem>
                <ListItem className="opacity-50">
                  <Check className="size-4 shrink-0" />
                  <span>API Access</span>
                </ListItem>
              </List>

              <button className="w-full mt-6 px-8 py-4 bg-[#092B7E] text-white rounded-xl font-medium hover:bg-[#0D3AA1] transition-all duration-200 cursor-pointer">
                Choisir Pro
              </button>
            </Body>
          </Card>

          {/* Agency Plan */}
          <Card>
            <Header>
              <Plan>
                <PlanName>Agency</PlanName>
              </Plan>
              <Price>
                <MainPrice>99€</MainPrice>
                <Period>/mois</Period>
              </Price>
            </Header>
            <Body>
              <List>
                <ListItem>
                  <Check className="size-4 text-[#092B7E] shrink-0" />
                  <span>Tout de Pro, plus :</span>
                </ListItem>
                <ListItem>
                  <Check className="size-4 text-[#092B7E] shrink-0" />
                  <span>Jusqu'à 10 utilisateurs</span>
                </ListItem>
                <ListItem>
                  <Check className="size-4 text-[#092B7E] shrink-0" />
                  <span>API complète</span>
                </ListItem>
                <ListItem>
                  <Check className="size-4 text-[#092B7E] shrink-0" />
                  <span>Webhooks</span>
                </ListItem>
                <ListItem>
                  <Check className="size-4 text-[#092B7E] shrink-0" />
                  <span>Marque blanche</span>
                </ListItem>
                <ListItem>
                  <Check className="size-4 text-[#092B7E] shrink-0" />
                  <span>Support dédié</span>
                </ListItem>
                <ListItem>
                  <Check className="size-4 text-[#092B7E] shrink-0" />
                  <span>Onboarding personnalisé</span>
                </ListItem>
              </List>

              <button className="w-full mt-6 px-8 py-4 bg-[#092B7E] text-white rounded-xl font-medium hover:bg-[#0D3AA1] transition-all duration-200 cursor-pointer">
                Contacter les ventes
              </button>
            </Body>
          </Card>
        </div>
      </div>
    </section>
  );
}
