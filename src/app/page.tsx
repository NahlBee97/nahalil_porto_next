import NavBar from "@/components/navbar";
import Home from "@/pages/home";
import About from "@/pages/about";
import Portfolio from "@/pages/porto";
import Experience from "@/pages/exp";
import Skills from "@/pages/skills";
import Contact from "@/pages/contact";
import Footer from "@/components/footer";

export default function mainPage() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Experience/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
};
