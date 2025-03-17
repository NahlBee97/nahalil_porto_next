import NavBar from "@/components/navbar";
import HomePage from "@/pages/home";
import About from "@/pages/about";
import Portfolio from "@/pages/porto";
import Experience from "@/pages/exp";
import Skills from "@/pages/skills";
import Testimonial from "@/pages/testimonial";
import Contact from "@/pages/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <NavBar/>
      <HomePage/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Experience/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  )
};
