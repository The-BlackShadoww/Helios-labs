import Section from '@/components/section';
import AboutBgShape from '@/components/shapes/AboutBgShape';
import AboutBgShapeSm from '@/components/shapes/AboutBgShapeSm';
import Image from 'next/image';

const AboutSection = () => {
    return (
        <Section id='about'>
            <div className='gap-x-11 gap-y-[30px] grid grid-cols-1 xl:grid-cols-[640px,auto]'>
                <div>
                    <Image
                        src={'/image/about-img.png'}
                        alt='about-us-image'
                        width={860}
                        height={860}
                        className='object-center object-cover'
                    />
                </div>
                {/* Text */}
                <div className='xl:text-start text-center sm:space-y-[18px] space-y-3 flex flex-col justify-center'>
                    <p className='_text_s'>Who We Are</p>
                    <h1 className='_title'>About HeliosLabs.AI</h1>
                    <div className='sm:space-y-[30px] space-y-[24px]'>
                        <p className='_text'>
                            HeliosLabs.AI is a pioneer in harnessing the power
                            of artificial intelligence to revolutionize backend
                            business operations. Our name draws inspiration from
                            Helios, the Greek god of the sun, symbolizing our
                            mission to bring light to the complex, often
                            overlooked processes that are crucial to business
                            efficiency. At HeliosLabs.AI, we are dedicated to
                            illuminating these hidden gears and transforming
                            them with cutting-edge AI solutions.
                        </p>
                        <p className='_text'>
                            Founded by a team of seasoned AI engineers and
                            industry veterans in supply chain, logistics, and
                            transportation, HeliosLabs.AI emerged from a vision
                            to address inefficiencies in the less glamorous but
                            vital internal operations of businesses. We are
                            committed to redefining how businesses approach
                            workflow automation by reimagining and optimizing
                            internal processes.
                        </p>
                    </div>
                </div>
            </div>

            {/* Background shape */}
            <div>
                <AboutBgShape className='sm:block hidden w-full object-center absolute sm:top-1/2 -translate-y-1/2 right-0 -z-10' />
                <AboutBgShapeSm className='sm:hidden block w-full object-center absolute top-0 right-0 -z-10' />
            </div>
        </Section>
    );
};

export default AboutSection;
