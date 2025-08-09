import Hero from "@/components/sections/Hero";
import CoursesPreview from "@/components/sections/CoursesPreview";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CommunitySection from "@/components/sections/CommunitySection";
import PartnershipSection from "@/components/sections/PartnershipSection";

export default function Home() {
  return (
    <>
      <Hero />
      <CoursesPreview />
      <TestimonialsSection />
      <CommunitySection />
      <PartnershipSection />
    </>
  );
}
