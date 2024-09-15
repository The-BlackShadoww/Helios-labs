import Footer from '@/components/footer';
import Header from '@/components/header';
import AboutSection from '@/views/home/components/about-section';
import CTASection from '@/views/home/components/cta-section';
import DiscoverSection from '@/views/home/components/discover-section';
import HeroSection from '@/views/home/components/hero-section';
import MissionSection from '@/views/home/components/mission-section';

const Home = () => {
    return (
        <main className='isolate'>
            <Header />
            <HeroSection />
            {/* <div>
                <div className="w-full h-[1080px] absolute top-0 left-0 bg-[url('/image/hero-bg.png')] bg-cover -z-50 sm:block hidden"></div>
                <div className="w-full h-[938px] absolute top-0 left-0 bg-[url('/image/hero-bg-mobile.png')] bg-cover -z-50 sm:hidden block"></div>
            </div> */}
            <AboutSection />
            <MissionSection />
            <DiscoverSection />
            <CTASection />
            <Footer />
        </main>
    );
};

export default Home;
