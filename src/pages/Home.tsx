import HeroSection from "@/components/home/HeroSection";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;