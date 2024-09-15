import RightArrow from '@/components/icons/RightArrow';
import LogoShape from '@/components/shapes/LogoShape';

const HeroSection = () => {
    return (
        <>
            <section id='hero' className='mb-[120px]'>
                <div className='container'>
                    <div className='flex xl:flex-row flex-col gap-x-[72px] xl:gap-y-0 sm:gap-y-16 gap-y-10 lg:mt-[190px] sm:mt-24 mt-7'>
                        {/* Text */}
                        <div className='xl:max-w-[720px]  xl:order-1 order-2'>
                            <div className='space-y-[18px] xl:text-start text-center flex flex-col xl:justify-start justify-center'>
                                <p className='_text_s sm:mb-0 mb-11'>
                                    Pioneering Automation for Smarter Business
                                    Operations
                                </p>
                                <h1 className='_title sm:block hidden'>
                                    Unlock Efficiency with AI-Powered Workflow
                                    Automation
                                </h1>
                                <p className='_text_lg'>
                                    Transform internal processes into
                                    streamlined, intelligent operations with
                                    HeliosLabs.AI.
                                </p>
                            </div>
                            <div className='w-full sm:mt-[72px] mt-[36px] flex gap-[18px] xl:justify-start justify-center'>
                                <a
                                    href='#contact'
                                    className='_button_lg flex gap-6'
                                >
                                    Get started
                                    <RightArrow />
                                </a>
                                <a
                                    href='#contact'
                                    className='button_lg_outline sm:justify-between gap-3'
                                >
                                    Contact Us
                                    <RightArrow />
                                </a>
                            </div>
                        </div>

                        {/* logo Image */}
                        <div className='w-full h-full __center_all xl:order-2 order-1 xl:-translate-y-16'>
                            <LogoShape className='xl:w-[648px] sm:w-[648px] w-[338px] xl:h-[648px] sm:h-[548px] h-[338px]' />
                        </div>
                    </div>
                </div>
            </section>

            <div
                className='h-screen z-[-1] absolute top-0 left-0 w-full'
                style={{
                    background:
                        'linear-gradient(to right, #02021D 0%, #141334 100%)',
                }}
            >
                <video
                    src='/videos/background-smoke.mp4'
                    className='size-full object-cover'
                    autoPlay
                    playsInline
                    loop
                    muted
                ></video>
            </div>
        </>
    );
};

export default HeroSection;
