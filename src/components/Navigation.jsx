

export default function Navigation({ elements }) {
    return (
        <nav>
            <ul className='space-y-1 pt-4 text-center'>
                {elements.map((el, idx) => {
                    return <li key={idx}>{el}</li>;
                })}
            </ul>
        </nav>
    );
}
