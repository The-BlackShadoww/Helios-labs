import { cn } from '@/lib/utils';
import { ComponentPropsWithoutRef } from 'react';

const Section = ({
    children,
    ...props
}: ComponentPropsWithoutRef<'section'>) => {
    return (
        <section {...props}>
            <div className={cn('w-full h-full relative _section_padding')}>
                <div className='container'>{children}</div>
            </div>
        </section>
    );
};

export default Section;
