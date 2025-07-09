import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <>
      <Header /> {/* 💥 Burada hata oluşuyor */}
      <Hero />
      <About />
    </>
  );
}
