import Education from "./components/Education";
import Header from "./components/Header";
import HomePage from "./components/HomePage";

export default function Home() {
  return (
    <>
      <Header />
      <div className="homepage"> 
        <HomePage />
        <Education />
      </div>
    </>
  );
}
