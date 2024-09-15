import AutomationIcon from '@/components/icons/AutomationIcon';
import ReportIcon from '@/components/icons/ReportIcon';
import SystemIcon from '@/components/icons/SystemIcon';
import Section from '@/components/section';
import Circle from '@/components/shapes/Circle';
import DiscoverBgShape from '@/components/shapes/DiscoverBgShape';
import DiscoverBgShapeSm from '@/components/shapes/DiscoverBgShapeSm';
import Dots from '@/components/shapes/Dots';
import Ellipse108 from '@/components/shapes/Ellipse108';
import Ellipse120 from '@/components/shapes/Ellipse120';
import Ellipse60 from '@/components/shapes/Ellipse60';

const DiscoverSection = () => {
    const content = [
        {
            title: 'Workflow Automation',
            text: 'Simplify complex processes and boost efficiency with intelligent automation.',
            icon: <AutomationIcon />,
        },
        {
            title: <>AI-Driven Reporting</>,
            text: 'Transform tedious reporting tasks into streamlined, error-free operations.',
            icon: <ReportIcon />,
        },
        {
            title: <>Interconnected Systems</>,
            text: 'Gain a comprehensive view of your operations with our holistic approach.',
            icon: <SystemIcon />,
        },
    ];

    return (
        <div
            id='discover'
            className='relative sm:bg-gradient-to-t from-[#141334] to-[#02021D] z-10'
        >
            <Section className='z-30 relative'>
                {/* Parent div */}
                <div className='max-w-[1440px] w-full grid xl:grid-cols-2 grid-cols-1 sm:gap-x-[96px] xl:gap-y-0 gap-y-[30px]'>
                    {/* Text */}
                    <div className='xl:max-w-[640px] w-full  xl:h-[516px] h-[374px] flex flex-col xl:items-start items-center self-center xl:gap-y-[60px] gap-y-[30px]'>
                        <div className='flex flex-col sm:gap-y-[18px] gap-y-[12px] xl:text-start text-center'>
                            <p className='_text_s'>How Can We Help You</p>
                            <h1 className='_title'>Discover Our Solutions</h1>
                            <div className='space-y-[30px] _text'>
                                <p>
                                    At HeliosLabs.AI, we offer a range of
                                    AI-driven solutions designed to streamline
                                    and enhance your internal operations.
                                </p>
                                <p>
                                    Whether you’re looking to optimize supply
                                    chain management, improve financial
                                    forecasting, or automate operational
                                    logistics, our innovative tools are here to
                                    help.
                                </p>
                            </div>
                        </div>
                        <div className='sm:block hidden'>
                            <a href='#contact' className='button_md'>
                                Submit a contact request
                            </a>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className='2xl:w-[704px] w-full sm:h-[704px] h-full flex items-center relative'>
                        <div className='w-full sm:h-[636px] h-full flex flex-col sm:items-start items-center gap-y-[30px]'>
                            {content.map((item, i) => (
                                <div
                                    key={i}
                                    className='w-full 2xl:h-[192px] h-[336px] py-9 sm:px-9 px-6 rounded-[36px] flex sm:flex-row flex-col sm:justify-start justify-center sm:items-start items-center gap-x-[30px] sm:gap-y-0 gap-y-[24px] bg-[linear-gradient(to_right,_rgba(255,255,255,0.06)_0%,_rgba(255,255,255,0)_93%,_rgba(255,255,255,0)_100%)] backdrop-blur-[20px]'
                                >
                                    <div>{item.icon}</div>
                                    <div className='space-y-[12px] sm:text-start text-center'>
                                        <h1 className='_subtitle_36'>
                                            {item.title}
                                        </h1>
                                        <p className='_text_lg'>{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='-z-10 sm:block hidden'>
                            <Ellipse120 className='absolute top-0 right-[116px]' />
                            <Ellipse60 className='absolute top-[288px] left-[128px]' />
                            <Ellipse108 className='absolute bottom-[36px] right-[50px]' />
                            <Dots className='absolute bottom-1 right-0' />
                            <Circle className='2xl:w-[704px] 2xl:h-[704px] w-[580px] h-[580px] absolute top-0 left-0 blur-[30px] border' />
                        </div>
                    </div>
                </div>
            </Section>
            {/* Background shape */}
            <div>
                <DiscoverBgShape className='sm:block hidden w-full object-center absolute sm:top-1/2 -translate-y-1/2 top-0 sm:left-0 left-0 z-20' />
                <DiscoverBgShapeSm className='sm:hidden block w-full object-center absolute top-0 right-0 -z-10' />
            </div>
        </div>
    );
};

export default DiscoverSection;
