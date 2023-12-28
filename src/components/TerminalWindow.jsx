import { useEffect } from 'react';

import Center from './Center.jsx';

import TerminalText from './TerminalText.jsx';
import TerminalHeader from './TerminalHeader.jsx';

import { useNavigate } from 'react-router-dom';

export default function TerminalWindow() {
    const navigate = useNavigate();

    const string = 'cat lubaskin.txt';
    const typeSpeed = 20;

    useEffect(() => {
        setTimeout(() => {
            navigate('/about/');
        }, string.length * typeSpeed + 2000);
    }, [navigate]);

    return (
        <Center>
            <div className='text-white font-console relative bg-[#333] pt-[47px] pl-[12px] pb-[12px] shadow-2xl shadow-black w-[550px] h-[350px] rounded-tl-[5px] rounded-tr-[5px'>
                <TerminalHeader></TerminalHeader>
                <TerminalText
                    string={string}
                    typeSpeed={typeSpeed}
                ></TerminalText>
            </div>
        </Center>
    );
}
