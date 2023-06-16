import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  const { t, lang } = useTranslation('common')
  
  return (
    <section
      id="get-started-today"
      className="relative py-32 overflow-hidden bg-purple-600"
    >
      <Image
        className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 max-w-none"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl tracking-tight text-white font-display sm:text-4xl">
            {t('cta_title')}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            {t('cta_subtitle')}
          </p>
          <Button href="https://wa.link/gnalak" target="_blank" color="white" className="mt-10">
            {t('cta_button')}
          </Button>
        </div>
      </Container>
    </section>
  )
}
