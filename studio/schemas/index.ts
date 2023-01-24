// Document types
import page from './documents/page'
import productSneakers from './documents/productSneakers'
import hero from './documents/hero'
import navigationBar from './documents/navigationBar'

const documents = [page, productSneakers, hero, navigationBar]

// Block content
import body from './blocks/body'

const blocks = [body]

// Object types

import moduleTestimonials from './objects/module/testimonials'
import moduleBrandImages from './objects/module/brandImages'
import moduleContactInfo from './objects/module/contactInfo'
import productImages from './objects/module/productImages'
import mainHeading from './objects/mainHeading'
import testimonialsHeadings from './objects/testimonialsHeadings'
import brandListHeadings from './objects/brandListHeadings'
import title from './objects/title'

const objects = [
  moduleTestimonials,
  moduleBrandImages,
  moduleContactInfo,
  productImages,
  mainHeading,
  testimonialsHeadings,
  brandListHeadings,
  title,
]

export const schemaTypes = [...documents, ...objects, ...blocks]
