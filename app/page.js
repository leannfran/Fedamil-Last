import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import BannerIntro from "./components/BannerIntro";
import HowTo from "./components/HowTo";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Themes from "./components/Themes";
export default function Home() {
  return (
    <main>
      <Hero/>
      <HowTo/>
      <BannerIntro/>
      <Testimonials/>
      <ContactUs/>
      <Themes/>
    </main>
  );
}
