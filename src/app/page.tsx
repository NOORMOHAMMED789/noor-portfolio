import Aboutme from "./components/Aboutme";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import { NavbarItems } from './constants/Navbar'
import { name } from "./constants/Ulity";

export default function Home() {
  return (
    <div className="mx-[5rem] my-[1rem]">
      <Header NavbarItems={NavbarItems} />
      <Homepage name={name} />
      <Aboutme name={name}/>
    </div>
  );
}
