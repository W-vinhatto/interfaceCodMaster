import PropTypes from 'prop-types'
import { Container, CardImage } from './style'
import { CardButton } from '../CardButton';
import { formatPrice } from '../../utils/formatPrice'



export function CardFilterProducts({ product }) {
    return (
        <Container>
            <CardImage src={product.url} alt={product.name} />
            <div>
                <p>{product.name}</p>
                <strong>{formatPrice(product.price)}</strong>
            </div>
            <CardButton/>
        </Container>
    );
}



CardFilterProducts.propTypes = {
    product: PropTypes.object
};