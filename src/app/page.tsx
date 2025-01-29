import {FeaturedCourses} from "@/components/FeaturedCourses";
import { HeroSection } from "@/components/HeroSection";
import { MusicSchoolTestimonialCards } from "@/components/MusicSchoolTestimonialCards";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { UpcomingWebinar } from "@/components/UpcomingWebinar";
import { Instructors } from "@/components/Instructor";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection></HeroSection>
      <FeaturedCourses></FeaturedCourses>
      <WhyChooseUs></WhyChooseUs>
      <MusicSchoolTestimonialCards></MusicSchoolTestimonialCards>
      <UpcomingWebinar></UpcomingWebinar>      
      <Instructors></Instructors>
      <Footer></Footer>
    </main>
  );
}
