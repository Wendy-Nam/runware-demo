import HeroSection from '@/components/HeroSection';
import ProblemSolutionSection from '@/components/ProblemSolutionSection';
import BeforeAfterSection from '@/components/BeforeAfterSection';
import DevExSection from '@/components/DevExSection';
import UseCaseSection from '@/components/UseCaseSection';
import CTASection from '@/components/CTASection';
import AppFooter from '@/components/AppFooter';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSolutionSection />
      <BeforeAfterSection />
      <DevExSection />
      <UseCaseSection />
      <CTASection />
      <AppFooter />
    </>
  );
}