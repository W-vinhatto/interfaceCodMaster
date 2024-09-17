
import PropTypes from 'prop-types'
import { ConteinerImage, ConteinerItens, DivButton } from './style';
import CardButton from '../CardButton';
import { formatPrice } from '../../utils/formatPrice'

export function CardProduct({ product }) {
    return (
      
        <ConteinerItens>
            <ConteinerImage imageUrl={product.url} alt={product.name} />
            <div>
                <p>{product.name}</p>
                <strong>{formatPrice(product.price)}</strong>
            </div>
            <DivButton>
                <CardButton></CardButton>
            </DivButton>
        </ConteinerItens>
      
    );
}


CardProduct.propTypes = {
    product: PropTypes.object
}