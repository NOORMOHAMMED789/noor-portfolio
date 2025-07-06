import ContactForm from "./components/ContactForm";
import EducationTimeline from "./components/EducationTimeline";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import MyCertifications from "./components/MyCertifications";
import MyProjects from "./components/MyProjects";

export default function Home() {
  return (
    <>
      <Header />
      <div className="homepage"> 
        <HomePage />
        <MyProjects />
        <EducationTimeline />
        <MyCertifications />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}
