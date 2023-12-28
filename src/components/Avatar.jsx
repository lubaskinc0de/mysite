
import avatar from '../assets/images/etoya.jpg';

export default function Avatar() {
    return (
        <img
            className='w-24 h-24 rounded-full mx-auto'
            alt='author collage with lions'
            src={avatar}
            width='384'
            height='512'
        ></img>
    );
}
