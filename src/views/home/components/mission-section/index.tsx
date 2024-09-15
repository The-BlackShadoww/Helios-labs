import AdaptiveIcon from '@/components/icons/AdaptiveIcon';
import AiDrivenIcon from '@/components/icons/AiDrivenIcon';
import HiddenBottlenecks from '@/components/icons/HiddenBottlenecks';
import HolisticIcon from '@/components/icons/HolisticIcon';
import Section from '@/components/section';
import MissionBgShape from '@/components/shapes/MissionBgShape';
import MissionBgShapeSm from '@/components/shapes/MissionBgShapeSm';
import Rectangle from '@/components/shapes/Rectangle';

const MissionSection = () => {
    const content = [
        {
            title: (
                <>
                    Hidden <br className='sm:block hidden' />
                    Bottlenecks
                </>
            ),
            text: 'Internal processes, from supply chain management to financial forecasting, often harbor inefficiencies that can go unnoticed yet impact overall business performance.',
            icon: <HiddenBottlenecks />,
        },
        {
            title: (
                <>
                    AI-Driven <br className='sm:block hidden' />
                    Insights
                </>
            ),
            text: 'Our AI doesn’t just digitize tasks—it reimagines entire workflows to uncover and address long-standing inefficiencies.',
            icon: <AiDrivenIcon />,
        },
        {
            title: (
                <>
                    Holistic <br className='sm:block hidden' /> Optimization
                </>
            ),
            text: 'Unlike fragmented solutions, our AI offers a unified approach, enhancing cross-departmental coordination and efficiency.',
            icon: <HolisticIcon />,
        },
        {
            title: (
                <>
                    Adaptive <br className='sm:block hidden' /> Solutions
                </>
            ),
            text: 'We provide dynamic solutions that evolve with your business, ensuring ongoing optimization and growth.',
            icon: <AdaptiveIcon />,
        },
    ];

    return (
        <div className='relative sm:bg-gradient-to-b from-[#141334] to-[#02021D] z-10 isolate'>
            <Section className='z-30 relative' id='mission'>
                <div className='max-w-[1442px] flex flex-col items-center sm:gap-y-[60px] gap-y-[30px] text-center relative'>
                    {/* Texts */}
                    <div className='max-w-[950px] sm:space-y-[18px] space-y-[12px] z-10'>
                        <p className='_text_s'>Why We Do</p>
                        {/* This text is not showing up */}
                        <h1 className='_title z-50'>Our Mission</h1>
                        <div className='_text'>
                            <p>
                                While CRM systems have dominated the market with
                                a focus on customer-facing interactions,
                                HeliosLabs.AI zeroes in on the internal
                                processes that drive business success from
                                behind the scenes. Our mission is clear: to
                                reengineer and automate the often cumbersome
                                internal workflows with advanced AI technology.
                            </p>
                            <p> Why Internal Operations Matter:</p>
                        </div>
                    </div>

                    {/* Rectangle */}
                    <div className='2xl:block hidden absolute top-[48px] left-1/2 -translate-x-1/2'>
                        <Rectangle />
                    </div>

                    {/* Cards */}

                    <div className='xl:w-full lg:w-[75%] w-full h-auto grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-x-[30px] xl:gap-y-0 gap-y-12 sm:place-content-start place-items-center'>
                        {content.map((item, i) => (
                            <div
                                key={i}
                                className='2xl:w-[338px] xl:w-[290px] md:w-[338px] w-full sm:h-[474px] h-[364px] __center_all relative'
                            >
                                <div className='absolute inset-0 rounded-[36px] bg-[linear-gradient(to_bottom,_rgba(255,255,255,0.06)_0%,_rgba(255,255,255,0)_93%,_rgba(255,255,255,0)_100%)] backdrop-blur-[20px] pointer-events-none'></div>
                                <div className='sm:max-w-[266px] max-w-[290px] sm:h-[394px] h-[292px] flex flex-col relative'>
                                    <div className='mb-[30px] w-full flex justify-center'>
                                        {item.icon}
                                    </div>
                                    <h1 className='sm:mb-[18px] mb-[12px] _subtitle_36'>
                                        {item.title}
                                    </h1>
                                    <p className='_text'>{item.text}</p>
                                </div>
                                <div className='absolute -bottom-6 lg:-bottom-7 left-[50%] -translate-x-[50%] -z-50 w-[282px] h-[282px] rounded-full bg-yellow/[12%]'></div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Texts */}
                    <div className='max-w-[950px] _text sm:mt-0 mt-[30px]'>
                        <p>
                            By shining a light on these critical but often
                            neglected areas, HeliosLabs.AI enables businesses to
                            achieve unprecedented efficiency, cost reduction,
                            and operational excellence.
                        </p>
                    </div>
                </div>
            </Section>
            {/* Background shape */}
            <div>
                <MissionBgShape className='sm:block hidden w-full object-center absolute sm:top-1/2 -translate-y-1/2 top-0 sm:left-0 left-0 z-[-1]' />
                <MissionBgShapeSm className='sm:hidden block w-full object-center absolute top-0 right-0 z-[-1]' />
            </div>
        </div>
    );
};

export default MissionSection;
