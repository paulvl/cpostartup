import { useEffect, useState } from 'react'
import Image from 'next/image'

import backgroundImage from '@/images/background-features.jpg'
import illustrationIdeasWorking from '@/images/illustrations/ideas_working.svg'

import {
  SparklesIcon,
  ArrowPathIcon,
  CursorArrowRaysIcon,
  ChevronRightIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'

const features = [
  {
    title: 'CPO as a Service',
    description:
      "Gestión estratégica y desarrollo, impulsamos la visión del producto estableciendo prioridades y definiendo una hoja de ruta supervisando su implementación. Abrazamos tu producto como si fuese nuestro, ese es nuestro mindset.",
    icon: SparklesIcon,
  },
  {
    title: 'User Research & Usabiliity Testing',
    description:
      "Realizamos investigación de usuarios y pruebas de usabilidad para comprender las necesidades y preferencias de los usuarios. Utilizaremos esta información para mejorar la usabilidad y la experiencia del producto, asegurando que se ajuste a las expectativas de los usuarios finales.",
    icon: CursorArrowRaysIcon,
  },
  {
    title: 'Deployment Management',
    description:
      "Ayudamos a planificar y ejecutar lanzamientos de productos exitosos. Colaboramos para coordinar el lanzamiento, realizar pruebas previas al lanzamiento, desarrollar estrategias de marketing y comunicación que garanticen una transición fluida hacia el mercado.",
    icon: CloudArrowUpIcon,
  },
  {
    title: 'Product Lifecycle Optimization',
    description:
      'Nos enfocamos en maximizar el ciclo de vida del producto, brindando orientación sobre cómo evolucionarlo y mejorarlo continuamente para mantenerlo relevante en un mercado competitivo. Esto implica análisis de datos, retroalimentación de usuarios, monitoreo de métricas clave y adaptación a las demandas cambiantes del mercado.',
    icon: ArrowPathIcon,
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
        <div id="que-podemos-hacer-por-ti" className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-8">
            <div className="relative overflow-hidden bg-purple-600 px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-16 xl:px-16">
              <Image
                className="absolute left-1/2 top-1/2 max-w-none "
                src={backgroundImage}
                alt=""
                width={1216}
                height={800}
                unoptimized
              />
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
                <div className="lg:row-start-2 lg:max-w-md">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Todo lo que necesites para hacer funcionar tu negocio.
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-300">
                    Nuestros equipos están listos para comenzar a trabajar contigo.
                  </p>
                </div>
                <Image
                  src={illustrationIdeasWorking}
                  alt="Product screenshot"
                  className="relative z-20 lg:row-span-4 min-w-full max-w-xl lg:w-[16rem] lg:max-w-none"
                ></Image>
              </div>
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none lg:items-center lg:gap-y-0">
                {/* <div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10"> */}
                <div className='mx-auto grid max-w-2xl lg:mx-0 lg:max-w-none lg:items-center lg:gap-y-0 mt-10 lg:border-t lg:border-white/10 lg:pt-10'>
                  <dl className="max-w-xl text-base leading-7 text-gray-300 lg:max-w-none grid grid-cols-1 lg:grid-cols-2 gap-x-8">
                    {features.map((feature) => (
                      <div key={feature.title} className="relative mb-10">
                        <dt className="ml-9 inline-block font-semibold text-white">
                          <feature.icon className="absolute left-1 top-1 h-5 w-5 text-purple-100" aria-hidden="true" />
                          {feature.title}
                        </dt>
                        <br/>
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
              </div>
              </div>
            </div>
        </div>
  )
}
