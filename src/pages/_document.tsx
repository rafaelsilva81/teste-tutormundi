import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        <meta charSet="UTF-8" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta name="theme-color" content="#2cc6d0" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          href="https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@300;400&family=Work+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />

        <title>TutorMundi - Avaliação</title>
        <meta name="description" content="Avalie o seu Tutor" />
        <meta name="author" content="rafaelsilva81" />
        <meta
          name="keywords"
          content="teste, tecnico, TutorMundi, desenvolvedor, estagio, avaliacao"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />

        <meta property="og:title" content="Teste técnico TutorMundi" />
        <meta
          property="og:description"
          content="Teste técnico para Estágio de Desenvolvedor front-end na TutorMundi"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://app.tutormundi.com/img/thumbnail.jpg"
        />
        <meta property="og:site_name" content="TutorMundi" />
      </Head>

      <body className="bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
