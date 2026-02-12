'use client';

import { Monitor, Globe, Smartphone, Zap, BarChart3, Wrench, ShoppingCart } from 'lucide-react';
import CategoryHero from '@/components/sections/services/CategoryHero';
import ServiceShowcase from '@/components/sections/services/ServiceShowcase';
import ProcessTimeline from '@/components/sections/services/ProcessTimeline';
import PricingSection from '@/components/sections/services/PricingSection';
import TestimonialsPreview from '@/components/sections/TestimonialsPreview';
import FinalCTA from '@/components/sections/services/FinalCTA';
import FAQAccordion from '@/components/sections/services/FAQAccordion';
import ComparisonTable from '@/components/sections/services/ComparisonTable';
import LeadCaptureForm from '@/components/sections/services/LeadCaptureForm';

export default function WebsiteAppDevContent({ categoryData }) {
  // Add icons to the data here in the client component
  const dataWithIcons = {
    ...categoryData,
    icon: Monitor,
    services: categoryData.services.map((service, index) => {
      const icons = [Globe, Smartphone, Zap, BarChart3, Wrench, ShoppingCart];
      return {
        ...service,
        icon: icons[index] || Monitor
      };
    })
  };

  return (
    <>
      <CategoryHero category={dataWithIcons} />
      <ServiceShowcase services={dataWithIcons.services} />
      <ProcessTimeline steps={dataWithIcons.process} />
      <ComparisonTable 
        services={dataWithIcons.pricingPlans}
        features={dataWithIcons.comparisonFeatures}
      />
      <PricingSection plans={dataWithIcons.pricingPlans} />
      <FAQAccordion 
        faqs={dataWithIcons.faqs}
        categoryName="Website & App Development"
      />
      <TestimonialsPreview />
      <LeadCaptureForm formType="quote" />
      <FinalCTA />
    </>
  );
}
