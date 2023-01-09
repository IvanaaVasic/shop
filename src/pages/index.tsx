import stylesHeadings from "../styles/Headings.module.scss";
import ImagesSlider from "../components/ImagesSlider";
import ProductsView from "../components/ProductsView";
import Testimonials from "../components/Testimonials";
import Heading from "../components/Heading";
import BrandsOverview from "../components/BrandsOverview";
import Layout from "../components/Layout";
import client from "../utils/sanityClient";

export const heading = {
  classContainer: stylesHeadings.pageHeadingContainer,
  classWrapper: stylesHeadings.pageHeadingWrapper,
  classHeading: stylesHeadings.pageHeading,
  classText: stylesHeadings.pageText,
};

export interface IProduct {
  image: string;
  brand: string;
  name: string;
  price: number;
  _id: string;
}
export interface IHeroImage {
  image: string;
  _id: string;
}
export interface IMainHeading {
  header: string;
  description: string;
}
export interface INavigation {
  name: string;
  slug: object;
  _id: string;
}
export interface ITestimonials {
  header: string;
  description: string;
}
export interface IHomePage {
  mainHeading: IMainHeading;
  showHero: boolean;
  slug: object;
  title: string;
  _id: string;
}
export interface IProps {
  products: IProduct[];
  homePage: IHomePage;
  heroImages: IHeroImage[];
  navigation: INavigation[];
  testimonialsHeading: ITestimonials;
}
export default function Home({
  products,
  homePage,
  heroImages,
  navigation,
  testimonialsHeading,
}: IProps) {
  console.log(testimonialsHeading);
  return (
    <>
      <ImagesSlider images={heroImages} />
      <Heading
        heading={homePage.mainHeading.header}
        text={homePage.mainHeading.description}
        classContainer={heading.classContainer}
        classWrapper={heading.classWrapper}
        classHeading={heading.classHeading}
        classText={heading.classText}
      />
      <ProductsView products={products} />
      <Testimonials testimonialsHeading={testimonialsHeading} />
      <BrandsOverview />
    </>
  );
}

Home.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
  const products: IProduct[] = await client.fetch(
    `*[_type == "productSneakers"]`
  );
  const homePage: IHomePage = await client.fetch(
    `*[_type == "page" && _id == '30b9a19e-52df-43d2-9c2c-d89acee59585'][0]`
  );
  const heroImages: IHeroImage[] = await client.fetch(
    `*[_type == "heroImages"]`
  );
  const navigation: IHeroImage[] = await client.fetch(
    `*[_type == "navigationBar"]`
  );
  const testimonialsHeading = await client.fetch(
    `*[_type == "page"][0].testimonialsHeadings{
      header,
      description
    }`
  );

  return {
    props: {
      products,
      homePage,
      heroImages,
      navigation,
      testimonialsHeading,
    },
  };
}
