import { PymeCards } from '../components/pymes'
import { Contact } from '../components/ui'
import { getPymeByTags } from '../database/dbPymes'




const PymesPage = async ({params}: any) => {

  const {pymes} = params;

  const products = await getPymeByTags(pymes);

  return (
    <>
    {
      products.map(product => (

        <PymeCards 
          key={product.slug}
          title={product.title}
          description={product.description}
          image={product.images[0]}
          rating={product.rating}
          instagram={product.instagram}
          whatsapp={product.whatsapp}
          slug={product.slug} 
          category={pymes} /> 

      ))
    }
    <Contact /> 
    </>
  )
}

export default PymesPage