import { useEffect, useRef } from 'react';

import Typed from 'typed.js';

export default function TerminalText({ string, typeSpeed }) {
    const typedElement = useRef(null);
    const dots = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedElement.current, {
            strings: [string],
            typeSpeed,
            showCursor: false,
        });

        const dotsTyped = new Typed(dots.current, {
            startDelay: string.length * typeSpeed + 100,
            strings: ['.^500.^500.^500.'],
            typeSpeed,
            showCursor: false,
        });

        // Destroying
        return () => {
            typed.destroy();
            dotsTyped.destroy();
        };
    });

    return (
        <>
            <p className='break-all'>
                <span className='text-sky-400'>lubaskinc0de@newyear:</span>
                <span className='text-red-400'>~/websit#/ba$h</span>
                <span className='text-green-400'>$</span>{' '}
                <span className='text-slate-300' ref={typedElement}></span>
            </p>
            <p className='break-all'>
                <span className='text-sky-400'>lubaskinc0de@newyear:</span>
                <span className='text-red-400'>~/website/bash</span>
                <span className='text-green-400'>$</span>{' '}
                <span className='text-slate-300' ref={dots}></span>
            </p>
        </>
    );
}
