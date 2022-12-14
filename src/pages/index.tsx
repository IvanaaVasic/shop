import styles from "../styles/Home.module.scss";
import NavBar from "../components/NavBar";
import ImagesSlider from "../components/ImagesSlider";
import ProductsView from "../components/ProductsView";
import Testimonials from "../components/Testimonials";
import PageHeading from "../components/PageHeading";

export const heading = {
  header: "Geta Commerce Cloud",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
};
export default function Home() {
  return (
    <>
      <NavBar />
      <ImagesSlider />
      <PageHeading heading={heading.header} text={heading.text} />
      <ProductsView />
      <Testimonials />
    </>
  );
}
