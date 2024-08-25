import Contacts from "@/components/MainPage/Contacts/Contacts";
import Footer from "@/components/MainPage/Footer/Footer";
import HeroPage from "@/components/HeroPage/HeroPage";
import Tarifs from "@/components/MainPage/Tarifs/Tarifs";
import WhyUs from "@/components/MainPage/WhyUs/WhyUs";
import Works from "@/components/MainPage/Works/Works";
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
