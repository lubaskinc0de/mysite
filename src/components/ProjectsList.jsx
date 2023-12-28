

export default function AboutProjectsList() {
    return (
        <ul className='list-disk text-center mt-2 text-sm font-mono font-light'>
            <li className='text-green-300 mb-2'>
                <a href='https://github.com/lubaskinc0de/Social-Net'>
                    Моя социальная сеть! Огромный проект, хоть она еще не полностью завершена, но там очень много чего есть!
                    Для написания Backend я использовал Django, Frontend написан на React с применением Redux & RTK.
                </a>
            </li>
            <li className='text-blue-500 mb-2'>
                <a href='https://github.com/lubaskinc0de/tgbot-template'>
                    Моя реализация игры "Жизнь" с разделением на доменный и презентационный слои. Что позволило
                    мне запускать игру как и в окошке с помощью pygame, так и прямо в телеграмм боте! Наглядный пример того, как
                    отделение бизнес-логики и способа ее презентации делает приложение невероятно гибким!
                </a>
            </li>
            <li className='text-orange-400 mb-2'>
                <a href='https://github.com/lubaskinc0de/spacerush'>
                    Моя игра по мотивам Space Invaders, написана на pygame с применением ООП.
                </a>
            </li>
            <li className='text-yellow-500 mb-2'>
                <a href='https://github.com/lubaskinc0de/yourscript'>
                    Приложение для написания заметок, тут я реализовал слоистую архитектуру, разбил монолит на контексты (по-сути независимые сервисы)
                    Наладил общение по сети между ними, применил некоторые техники и приемы из DDD и написал для всего этого фронтенд на React!
                </a>
            </li>
        </ul>
    );
}
