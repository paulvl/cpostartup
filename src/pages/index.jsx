import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation';

import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Home() {
  const { t, lang } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t('meta_title')}</title>
        <meta
          name="description"
          content={t('meta_description')}
        />
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
