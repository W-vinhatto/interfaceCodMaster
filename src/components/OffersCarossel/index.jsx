
import { useEffect, useState } from 'react'
import api from '../../services/api'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'


import {
  Conteiner,
  
  Title,
} from './styles'
import { CardFilterProducts } from '../CardFilterProducts'

export function OffersCarrosel() {

  const [offers, setOffers] = useState([])

  useEffect(() => {
    async function loadOffers() {
      const { data } = await api.get('/products')
      // filtrando produtos que campo offers seja igual offer true
      const onlyOffers = data.filter((product) => product.offer)
      setOffers(onlyOffers)
    }
    loadOffers()
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
      <Title>Ofertas do dia</Title>

      <Carousel
        responsive={responsive}
        infinite={true}
        partialVisbile={false}
        itemClass="carrosel-item"
      >
        {offers.map((products) => (
          <CardFilterProducts  key={products.id} product={products}/>
        ))
        }
      </Carousel>
    </Conteiner>
  )
}