import { useEffect, useState } from 'react'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

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

const { t, lang } = useTranslation('common')

const features = [
  {
    title: 'CPO as a Service',
    description: t('primary_features_cpo'),
    icon: SparklesIcon,
  },
  {
    title: 'Deployment Management',
    description: t('primary_features_deployment'),
    icon: CloudArrowUpIcon,
  },
  {
    title: 'User Research & Usabiliity Testing',
    description: t('primary_features_research'),
    icon: CursorArrowRaysIcon,
  },
  {
    title: 'Product Lifecycle Optimization',
    description: t('primary_features_product_lifecycle'),
    icon: ArrowPathIcon,
  },
]

  return (
        <div id={t('link_what_we_can_do')} className="mx-auto mt-8 max-w-7xl sm:px-6 lg:px-8">
            <div className="relative px-6 py-20 overflow-hidden bg-purple-600 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-16 xl:px-16">
              <Image
                className="absolute left-1/2 top-1/2 max-w-none "
                src={backgroundImage}
                alt=""
                width={1216}
                height={800}
                unoptimized
              />
              <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-4 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {t('primary_features_title')}
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-300">
                    {t('primary_features_subtitle')}
                  </p>
                </div>
                <Image
                  src={illustrationIdeasWorking}
                  alt="Product screenshot"
                  className="relative z-20 w-full"
                ></Image>
              </div>
              <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-none lg:items-center lg:gap-y-0">
                <div className='grid max-w-2xl mx-auto mt-10 lg:mx-0 lg:max-w-none lg:items-center lg:gap-y-0 lg:border-t lg:border-white/10 lg:pt-10'>
                  <dl className="grid max-w-xl grid-cols-1 text-base leading-7 text-gray-300 lg:max-w-none lg:grid-cols-2 gap-x-8">
                    {features.map((feature) => (
                      <div key={feature.title} className="relative mb-10">
                        <dt className="inline-block font-semibold text-white ml-9">
                          <feature.icon className="absolute w-5 h-5 text-purple-100 left-1 top-1" aria-hidden="true" />
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
