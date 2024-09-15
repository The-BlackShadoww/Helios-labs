import CtaForm from '@/views/home/components/cta-section/CtaForm';

const CTASection = () => {
    return (
        <section id='contact' className='scroll-mt-20'>
            <div className='_cta_gradient'>
                <div className='container sm:mt-6'>
                    <div className='max-w-[1440px] xl:h-[656px] h-[1072px] grid xl:grid-cols-2 grid-cols-1 2xl:gap-x-[248px] sm:gap-x-3'>
                        {/* Texts */}
                        <div className='xl:max-w-[600px] w-full xl:h-[444px] self-center xl:space-y-[60px] space-y-[30px] xl:text-start text-center sm:mt-0 mt-[70px]'>
                            <div className='w-full sm:space-y-3 space-y-[6px]'>
                                <h1 className='_subtitle_72'>
                                    Ready to transform your internal processes?
                                </h1>
                                <p className='_text'>
                                    Have questions or need a customized
                                    solution? Reach out to us today and discover
                                    how HeliosLabs.AI can drive your business
                                    forward.
                                </p>
                            </div>
                            <div className='w-full flex xl:justify-start justify-center'>
                                <button className='button_md_white'>
                                    Submit a contact request
                                </button>
                            </div>
                        </div>

                        {/* Form */}
                        <CtaForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
