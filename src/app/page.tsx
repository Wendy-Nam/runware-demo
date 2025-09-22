import HeroSection from '@/app/landing/HeroSection';
import ProblemSolutionSection from '@/app/landing/ProblemSolutionSection';
import BeforeAfterSection from '@/app/landing/BeforeAfterSection';
import DevExSection from '@/app/landing/DevExSection';
import UseCaseSection from '@/app/landing/UseCaseSection';
import CTASection from '@/app/landing/CTASection';
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