import { useEffect, useState } from 'react';

export function RandomSlogan() {

    const rnd = Math.floor(Math.random() * 2);

    const sloganOptions = [
        'Te ayudamos a liberar el backlog  para avanzar sin obstáculos en el roadmap.',
        'Rompe las barreras del backlog y avanza sin contratiempos en tu roadmap con nuestro respaldo.',
    ];

    const [random, setRandom] = useState(0);
    useEffect(() => setRandom(rnd), [])
    const randomSlogan = sloganOptions[random];

    return (
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
            {randomSlogan}
        </p>
    )
}