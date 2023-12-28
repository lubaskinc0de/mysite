

import Center from './Center.jsx';

export default function Container({ children }) {
    return (
        <Center>
            <div className='rounded-xl p-8 backdrop-blur-lg border-red-400 border-2 max-w-2xl'>
                {children}
            </div>
        </Center>
    );
}
