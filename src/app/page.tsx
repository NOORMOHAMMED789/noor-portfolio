import Header from "./components/Header";
import HomePage from "./components/HomePage";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="homepage">
        <HomePage />
      </div>
    </div>
  );
}
