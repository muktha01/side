import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import CaseStudy from '@/components/sections/CaseStudy';
import Awards from '@/components/sections/Awards';
import WorldwidePresence from '@/components/sections/WorldwidePresence';
import Blog from '@/components/sections/Blog';
import Footer from '@/components/sections/Footer';
import WhyChooseUs from '@/components/sections/WhyChooseUs';

export default function Home() {
  return (
    <div className="bg-black">
      <Header />
      <Hero />
      <Services />
      {/* <CaseStudy /> */}
      <Awards />
      {/* <WhyChooseUs/> */}
      <WorldwidePresence />
      <Blog />
      
    </div>
  );
}
