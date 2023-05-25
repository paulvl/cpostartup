import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

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
      </main>
      <Footer />
    </>
  )
}
