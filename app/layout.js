import { Inter } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "./components/NavBar"; // Asegúrate de que la ruta sea correcta
import Footer from "./components/Footer";
import Wsp from "./components/Wsp";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FEDAMIL - Innovación y calidad",
  description: "En Fedamil, unimos innovación y calidad para ofrecerte los mejores materiales y servicios en cada fase de tu proyecto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
      </head>
      <body className={inter.className}>
        <NavBar />
        {children}
        <Wsp/>
        <Footer/>
      </body>
    </html>
  );
}

