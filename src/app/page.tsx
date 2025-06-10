import Header from "./components/HomePage/Header";
import { NavbarItems } from './constants/Navbar'

export default function Home() {
  return (
    <div>
      <Header NavbarItems={NavbarItems} />
    </div>
  );
}
