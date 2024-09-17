
import { useEffect, useState } from 'react'
import api from '../../services/api'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'


import {
  Conteiner,
  Title,
  ConteinerItens
} from './styles'

export function CategoriesCarrosel() {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      setCategories(data)
    }
    loadCategories()
  }, [])

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    Desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1280, min: 690 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 690, min: 0 },
      items: 2
    },
  }

  return (
    <Conteiner>
      <Title>Categorias</Title>

      <Carousel
        responsive={responsive}
        infinite={true}
        partialVisbile={false}
        itemClass="carrosel-item"
      >
        {categories.map((category) => (
          <ConteinerItens 
          key={category.id}
          imageUrl={category.url}
          >
            <p>{category.name}</p>
          </ConteinerItens>
        ))
        }
      </Carousel>

    </Conteiner>
  )
}
