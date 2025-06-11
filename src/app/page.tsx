import Aboutme from "./components/Aboutme";
import Contactme from "./components/Contactme";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import MyProjects from "./components/MyProjects";
import { NavbarItems } from './constants/Navbar'
import { name } from "./constants/Ulity";

export default function Home() {
  return (
    <div className="mx-[5rem] my-[1rem]">
      <Header NavbarItems={NavbarItems} />
      <Homepage name={name} />
      <Aboutme name={name} />
      <MyProjects name={name} />
      <Contactme name={name} />
    </div>
  );
}
