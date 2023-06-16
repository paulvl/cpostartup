import { useEffect, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

export function RandomSlogan() {
    const { t, lang } = useTranslation('common')

    const rnd = Math.floor(Math.random() * 2);

    const sloganOptions = [
        t('hero_slogan_1'),
        t('hero_slogan_2'),
    ];

    const [random, setRandom] = useState(0);
    useEffect(() => setRandom(rnd), [])
    const randomSlogan = sloganOptions[random];

    return (
        <p className="max-w-2xl mx-auto mt-6 text-lg tracking-tight text-slate-700">
            {randomSlogan}
        </p>
    )
}