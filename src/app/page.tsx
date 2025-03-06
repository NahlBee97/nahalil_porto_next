import NavBar from "@/components/navbar";
import Home from "@/pages/home";
import About from "@/pages/about";
import Contact from "@/pages/contact";


export default function mainPage() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Contact/>
    </div>
  )
};
