import dynamic from 'next/dynamic';
import RebootHero from '@/components/home/RebootHero';

const SignalMarquee = dynamic(() => import('@/components/home/SignalMarquee'));
const LogosRibbon = dynamic(() => import('@/components/home/LogosRibbon'));
const ShowreelSection = dynamic(() => import('@/components/home/ShowreelSection'));
const AnimationGallerySection = dynamic(() => import('@/components/home/AnimationGallerySection'));
const MotionChoreoSection = dynamic(() => import('@/components/home/MotionChoreoSection'));
const ScrollScenesSection = dynamic(() => import('@/components/home/ScrollScenesSection'));
const RealtimeDashboard = dynamic(() => import('@/components/home/RealtimeDashboard'));
const PerformanceWallSection = dynamic(() => import('@/components/home/PerformanceWallSection'));
const InnovationStackSection = dynamic(() => import('@/components/home/InnovationStackSection'));
const HyperPlaygroundSection = dynamic(() => import('@/components/home/HyperPlaygroundSection'));
const SystemBlueprint = dynamic(() => import('@/components/home/SystemBlueprint'));
const WorkShowcases = dynamic(() => import('@/components/home/WorkShowcases'));
const CapabilityMatrix = dynamic(() => import('@/components/home/CapabilityMatrix'));
const FinalCta = dynamic(() => import('@/components/home/FinalCta'));

export default function Home() {
  return (
    <main>
      <RebootHero />
      <SignalMarquee />
      <LogosRibbon />
      <ShowreelSection />
      <AnimationGallerySection />
      <MotionChoreoSection />
      <ScrollScenesSection />
      <RealtimeDashboard />
      <PerformanceWallSection />
      <InnovationStackSection />
      <HyperPlaygroundSection />
      <SystemBlueprint />
      <WorkShowcases />
      <CapabilityMatrix />
      <FinalCta />
    </main>
  );
}
