import Navbar from "@/components/Navbar";
import { Hero } from "@/components/hero";
import { Waitlist } from "@/components/waitlist";
import { ProblemSolution } from "@/components/problem-solution";
import { Features } from "@/components/features";
import { Pricing } from "@/components/pricing";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Waitlist />
      <ProblemSolution />
      <div id="features">
        <Features />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <Footer />
    </div>
  );
}
