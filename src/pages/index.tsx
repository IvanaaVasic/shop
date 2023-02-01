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

export interface ISlug {
  current: string;
}
export interface IProduct {
  image: string;
  brand: string;
  name: string;
  price: number;
  _id: string;
  slug: ISlug;
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
export interface ITestimonialsHeading {
  header: string;
  description: string;
}
export interface ITestimonials {
  image: string;
  comment: string;
  person: string;
  classBox: string;
  _key: string;
}
export interface IHomePage {
  mainHeading: IMainHeading;
  showHero: boolean;
  slug: object;
  title: string;
  _id: string;
}
export interface IBrandHeading {
  header: string;
  description: string;
}
export interface IBrandImages {
  image: string;
  _key: string;
}
export interface IProps {
  products: IProduct[];
  homePage: IHomePage;
  heroImages: IHeroImage[];
  navigation: INavigation[];
  testimonialsHeading: ITestimonialsHeading;
  testimonials: ITestimonials[];
  brandHeading: IBrandHeading;
  brandImages: IBrandImages[];
}
export default function Home({
  products,
  homePage,
  heroImages,
  navigation,
  testimonialsHeading,
  testimonials,
  brandHeading,
  brandImages,
}: IProps) {
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
      <Testimonials
        testimonialsHeading={testimonialsHeading}
        testimonials={testimonials}
      />
      <BrandsOverview brandHeading={brandHeading} brandImages={brandImages} />
    </>
  );
}

Home.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export async function getServerSideProps() {
  const products: IProduct[] = await client.fetch(
    `*[_type == "page" && _id == '30b9a19e-52df-43d2-9c2c-d89acee59585'][0].productListBlock.items[]->`
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
  const testimonials = await client.fetch(
    `*[_type == "page"][0].body[0].testimonials`
  );
  const brandHeading = await client.fetch(
    `*[_type == "page"][0].brandHeadings{
      header,
      description
    }`
  );
  const brandImages = await client.fetch(
    `*[_type == "page"][0].body[1].brandImages`
  );

  return {
    props: {
      products,
      homePage,
      heroImages,
      navigation,
      testimonialsHeading,
      testimonials,
      brandHeading,
      brandImages,
    },
  };
}
