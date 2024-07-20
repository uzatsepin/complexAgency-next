import Contacts from "@/components/Contacts/Contacts";
import HeroPage from "@/components/HeroPage/HeroPage";
import Tarifs from "@/components/Tarifs/Tarifs";
import WhyUs from "@/components/WhyUs/WhyUs";
import Works from "@/components/Works/Works";
import { Analytics } from "@vercel/analytics/react"


export default function Home() {
  return (
   <div>
      <HeroPage />
      <WhyUs />
      <Works />
      <Tarifs />
      <Contacts />

      <Analytics />
   </div>
  );
}
