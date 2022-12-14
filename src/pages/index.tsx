import styles from "../styles/Home.module.scss";
import NavBar from "../components/NavBar";
import ImagesSlider from "../components/ImagesSlider";
import ProductsView from "../components/ProductsView";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <NavBar />
      <ImagesSlider />
      <ProductsView />
      <Testimonials />
    </>
  );
}
