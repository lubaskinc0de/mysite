
import cat from '../assets/images/cat.gif';

export default function ProjectsTitle() {
    return (
        <div className='mt-4 items-center flex justify-center'>
            <p className='text-center underline text-lg font-mono font-bold text-neutral-200'>
                Несколько из моих проектов!
            </p>
            <img alt='cat' className='w-7 h-7 ml-1' src={cat}></img>
        </div>
    );
}
