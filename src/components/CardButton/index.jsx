import { ContainerBUtton } from "./style";
import  cartImage  from "../../assets/Vector (1).svg";

export function CardButton  ({ ...props })  {
    return (
        <ContainerBUtton {...props}>
            <img src={cartImage} alt="carrinho de compras"/>
        </ContainerBUtton>
    );
}
