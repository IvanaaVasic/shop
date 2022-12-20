import stylesHeadings from "../styles/Headings.module.scss";
import ImagesSlider from "../components/ImagesSlider";
import ProductsView from "../components/ProductsView";
import Testimonials from "../components/Testimonials";
import Heading from "../components/Heading";
import Layout from "../components/Layout";

export const heading = {
  header: "Geta Commerce Cloud",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  classContainer: stylesHeadings.pageHeadingContainer,
  classWrapper: stylesHeadings.pageHeadingWrapper,
  classHeading: stylesHeadings.pageHeading,
  classText: stylesHeadings.pageText,
};
export default function Home() {
  return (
    <>
      <ImagesSlider />
      <Heading
        heading={heading.header}
        text={heading.text}
        classContainer={heading.classContainer}
        classWrapper={heading.classWrapper}
        classHeading={heading.classHeading}
        classText={heading.classText}
      />
      <ProductsView />
      <Testimonials />
    </>
  );
}

Home.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
