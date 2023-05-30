import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document(props) {
  let pageProps = props.__NEXT_DATA__?.props?.pageProps

  const gaScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-LN6X8PTK69');
  `;

  return (
    <Html
      className="h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']"
      lang="en"
    >
      <Head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-LN6X8PTK69`}></script>
        <script dangerouslySetInnerHTML={{ __html: gaScript}}></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lexend:wght@400;500&display=swap"
        />
      </Head>
      <body className="w-full flex h-full flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
