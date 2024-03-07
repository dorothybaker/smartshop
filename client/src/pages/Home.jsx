import { useEffect } from "react";
import Categories from "../components/Categories";
import SelectedProducts from "../components/SelectedProducts";
import Slider from "../components/Slider";
import Contact from "../components/Contact";

function Home() {
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
  }, []);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <Slider />
      <SelectedProducts type={"Featured"} />
      <Categories />
      <SelectedProducts type={"Trending"} />
      <Contact />
    </div>
  );
}

export default Home;
