import Contacts from "@/components/Contacts/Contacts";
import Footer from "@/components/Footer/Footer";
import HeroPage from "@/components/HeroPage/HeroPage";
import Tarifs from "@/components/Tarifs/Tarifs";
import WhyUs from "@/components/WhyUs/WhyUs";
import Works from "@/components/Works/Works";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"



export default function Home() {
  return (
   <div>
      <HeroPage />
      <WhyUs />
      <Works />
      <Tarifs />
      <Contacts />
      <Footer />
      <Analytics />
      <SpeedInsights />
   </div>
  );
}
