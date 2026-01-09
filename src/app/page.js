import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import AboutSnapshot from '@/components/sections/AboutSnapshot';
import ProductsOverview from '@/components/sections/ProductsOverview';
import WhyChooseSdev from '@/components/sections/WhyChooseSdev';
import TestimonialsPreview from '@/components/sections/TestimonialsPreview';
import CaseStudy from '@/components/sections/CaseStudy';
import WorldwidePresence from '@/components/sections/WorldwidePresence';
import Blog from '@/components/sections/Blog';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="bg-black">
      <Header />
      <Hero />
      <Services />
      <AboutSnapshot />
      <ProductsOverview />
      <WhyChooseSdev />
      <TestimonialsPreview />
      {/* <CaseStudy /> */}
      <WorldwidePresence />
      <Blog />
      <FinalCTA />
      <Footer />
    </div>
  );
}
