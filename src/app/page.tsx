// import Aboutme from "./components/Aboutme";
// import Contactme from "./components/Contactme";
import Header from "./components/Header";
// import Homepage from "./components/Homepage";
// import MyProjects from "./components/MyProjects";
import { NavbarItems } from './constants/Navbar'

export default function Home() {
  return (
    <div>
      <Header NavbarItems={NavbarItems} />
      {/* <Homepage /> */}
      {/* <Aboutme name={name} /> */}
      {/* <MyProjects name={name} /> */}
      {/* <Contactme name={name} /> */}
    </div>
  );
}
