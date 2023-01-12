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
import mainHeading from './objects/mainHeading'
import testimonialsHeadings from './objects/testimonialsHeadings'
import brandListHeadings from './objects/brandListHeadings'

const objects = [
  moduleTestimonials,
  moduleBrandImages,
  mainHeading,
  testimonialsHeadings,
  brandListHeadings,
]

export const schemaTypes = [...documents, ...objects, ...blocks]
