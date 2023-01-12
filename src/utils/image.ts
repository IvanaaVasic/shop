import client from "../utils/sanityClient";
import imageUrlBuilder from "@sanity/image-url";

function urlFromThumbnail(source: any) {
  return imageUrlBuilder(client).image(source).url();
}

export { urlFromThumbnail };
