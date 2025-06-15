// import Aboutme from "./components/Aboutme";
// import Contactme from "./components/Contactme";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
// import MyProjects from "./components/MyProjects";
import { NavbarItems } from './constants/Navbar'
import { brand, name } from "./constants/Ulity";

export default function Home() {
  return (
    <div>
      <Carousel name={name} brand={brand}/>
      <Header NavbarItems={NavbarItems} />
      <Homepage name={name} />
      {/* <Aboutme name={name} /> */}
      {/* <MyProjects name={name} /> */}
      {/* <Contactme name={name} /> */}
    </div>
  );
}
