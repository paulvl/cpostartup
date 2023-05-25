import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Head>
        <title>CPO Startup - Hacemos realidad tus productos</title>
        <meta
          name="description"
          content="Ayudamos a startups a comprender a sus clientes y desarrollar soluciones eficientes, soporte en el desarrollo y lanzamiento de nuevos productos"
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        {/* <Testimonials /> */}
        {/* <Pricing /> */}
        {/* <Faqs /> */}
      </main>
      <Footer />
    </>
  )
}
