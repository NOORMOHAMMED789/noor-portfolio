import Header from "./components/Header";
import HomePage from "./components/HomePage";
import MyProjects from "./components/MyProjects";

export default function Home() {
  return (
    <>
      <Header />
      <div className="homepage"> 
        <HomePage />
        <MyProjects />
      </div>
    </>
  );
}
