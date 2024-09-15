import CallIcon from '@/components/icons/CallIcon';
import FacebookIcon from '@/components/icons/FacebookIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';
import LocationIcon from '@/components/icons/LocationIcon';
import MailIcon from '@/components/icons/MailIcon';
import TwitterIcon from '@/components/icons/TwitterIcon';
import FooterLogo from '@/components/shapes/FooterLogo';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='w-full lg:h-[562px] h-[1014px]'>
                    <div className='w-full h-full grid xl:grid-cols-8 grid-cols-1 relative lg:mt-0 sm:mt-[80px] mt-[240px]'>
                        <div className='sm:col-span-3 self-center sm:w-[400px] w-full h-auto'>
                            <div className='space-y-8'>
                                <div className='space-y-[18px]'>
                                    <FooterLogo />
                                    <p className='_footer_text'>
                                        Have questions or need a customized
                                        solution? Reach out to us today and
                                        discover how HeliosLabs.AI can drive
                                        your business forward.
                                    </p>
                                </div>
                                <div className='flex gap-x-3'>
                                    <Link href={'/'}>
                                        <FacebookIcon />
                                    </Link>
                                    <Link href={'/'}>
                                        <TwitterIcon />
                                    </Link>
                                    <Link href={'/'}>
                                        <InstagramIcon />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='sm:col-span-5 self-center flex lg:flex-row flex-col gap-x-[60px] lg:gap-y-0 gap-y-[50px] lg:translate-y-[40px] lg:mb-0 mb-12'>
                            {/* Links */}
                            <div className='lg:w-[180px] w-full flex lg:flex-col flex-row sm:gap-y-[30px]'>
                                <div className='sm:space-y-6 space-y-3 basis-1/2'>
                                    <h4 className='_h4'>Quick Links</h4>
                                    <ul className='text-[18px] leading-[42px] text-white/[72%]'>
                                        <li>
                                            <Link
                                                href={'/'}
                                                className='hover:text-yellow duration-100 ease-linear'
                                            >
                                                About us{' '}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={'/'}
                                                className='hover:text-yellow duration-100 ease-linear'
                                            >
                                                Solutions{' '}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={'/'}
                                                className='hover:text-yellow duration-100 ease-linear'
                                            >
                                                Contact{' '}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className='sm:space-y-6 space-y-3 basis-1/2'>
                                    <h4 className='_h4'>LEGAL</h4>
                                    <ul className='text-[18px] leading-[42px] text-white/[72%]'>
                                        <li>
                                            <Link
                                                href={'/'}
                                                className='hover:text-yellow duration-100 ease-linear'
                                            >
                                                Privacy Policy{' '}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={'/'}
                                                className='hover:text-yellow duration-100 ease-linear'
                                            >
                                                Terms of Service
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Contact */}
                            <div className='sm:w-[220px] w-full sm:space-y-9 space-y-3'>
                                <h4 className='_h4'>CONTACT</h4>
                                <ul className='space-y-3 '>
                                    <li className='flex gap-x-3'>
                                        <LocationIcon />
                                        <p className='_footer_text'>
                                            Waukesha, Wisconsin,{' '}
                                            <br
                                                className='sm:block hidden
                                            '
                                            />
                                            United States
                                        </p>
                                    </li>
                                    <li className='flex gap-x-3'>
                                        <MailIcon />
                                        <p className='_footer_text'>
                                            info@gmail.com
                                        </p>
                                    </li>
                                    <li className='flex gap-x-3'>
                                        <CallIcon />
                                        <p className='_footer_text'>
                                            123 (431-3723)
                                        </p>
                                    </li>
                                </ul>
                            </div>{' '}
                            {/* Newsletter */}
                            <div className='sm:w-[380px] w-full sm:space-y-[30px] space-y-[24px]'>
                                <div className='sm:space-y-9 space-y-3'>
                                    <h4 className='_h4'>Newsletter Signup</h4>
                                    <p className='_footer_text'>
                                        Stay updated with out latest news and{' '}
                                        <br />
                                        updates
                                    </p>
                                </div>
                                <button className='button_sm'>Subscribe</button>
                            </div>
                        </div>
                        {/* Rights */}
                        <p className='w-full absolute lg:bottom-[100px] bottom-[18px] lg:text-start text-center left-0'>
                            @2024
                            <span className='font-bold uppercase'>
                                {' '}
                                Helioslabs{' '}
                            </span>
                            all right reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
