

import { Link } from 'react-router-dom';

export default function LinkTo({ url, text}) {
    return (
        <Link to={url}>
            <p className='text-center mt-2 underline text-lg font-mono font-bold text-sky-500'>
                {text}
            </p>
        </Link>
    );
}
