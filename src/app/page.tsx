import Header from "./components/HomePage/Header";
import Homepage from "./components/HomePage/Homepage";
import { NavbarItems } from './constants/Navbar'
import { name } from "./constants/Ulity";

export default function Home() {
  return (
    <div className="mx-[5rem] my-[1rem]">
      <Header NavbarItems={NavbarItems} />
      <Homepage name={name} />
    </div>
  );
}
