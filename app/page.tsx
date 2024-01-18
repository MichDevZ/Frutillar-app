import { Cards } from "./components/ui";
import { Contact } from './components/ui';

export default function Home() {

  const cardContent = {
    title: 'Bienvenido a Pymes de Frutillar!',
    description: `En este sitio encontrarás todas las pymes de Frutillar.
    Tanto como de comida, como de hospedaje y ubers de confianza!`,
    image: 'https://cdn.viajala.com/img/blog/teatro-del-lago-cl_M.jpeg?uMpyyY_03jtXJvNZCDe0mef33j70JGn2'

  }

  const cardContent2 = {
    title: 'Desarrollado para las pymes de Frutillar',
    description: `Porque queremos a apoyar a esas empresas que buscan un lugar y a las personas las 
    cuales desean tener todo en un solo lugar!`,
    image: 'https://cdn.viajala.com/img/blog/teatro-del-lago-cl_M.jpeg?uMpyyY_03jtXJvNZCDe0mef33j70JGn2'

  }


  return (
    <>
    <Cards title={cardContent.title} description={cardContent.description} image={cardContent.image} />
    <Cards title={cardContent2.title} description={cardContent2.description} image={cardContent2.image} />
    <Contact />
    </>
  )
}
