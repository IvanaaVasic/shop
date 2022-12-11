import styles from "../styles/Home.module.scss";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import ProductsView from "../components/ProductsView";

export default function Home() {
  return (
    <>
      <NavBar />
      <ProductsView />
    </>
  );
}
