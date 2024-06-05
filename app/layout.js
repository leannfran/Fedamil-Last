import { Inter } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "./components/NavBar"; // Asegúrate de que la ruta sea correcta
import Footer from "./components/Footer";
import Wsp from "./components/Wsp";
import { GoogleAnalytics } from '@next/third-parties/google';

import { FacebookPixelEvents } from './components/pixel-events'
import { Suspense } from 'react'
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FEDAMIL - Soluciones integrales en construcción",
  description: "En Fedamil, unimos innovación y calidad para ofrecerte los mejores materiales y servicios en cada fase de tu proyecto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        <script dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5B2V7FL6');`,
      }} />





      </Head>
      <body className={inter.className}>
            {/* Google Tag Manager */}
      
      {/* End Google Tag Manager */}
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5B2V7FL6"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
      </noscript>
        <NavBar />
        {children}
        <Wsp/>
        <Footer/>
        <GoogleAnalytics gaId="G-3JWFBQKN1S" />
        <Suspense fallback={null}>
          <FacebookPixelEvents />
        </Suspense>
      </body>
    </html>
  );
}

