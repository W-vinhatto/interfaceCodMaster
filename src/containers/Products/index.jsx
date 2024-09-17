import { useEffect, useState } from "react";
import { Banner, Container, CategoryMenu, ContainerMenu, CategoryButton } from "./style";
import api from "../../services/api";
import { CardFilterProducts } from "../../components/CardFilterProducts";
import { useNavigate } from "react-router-dom";



export function Products() {

    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [activeCategory, setActiveCategory] = useState(0)


    const navigate = useNavigate()


    // fazendo as duas chamadas necessárias para api,coletar categoris depois products
    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')

            const newCategory = [{ id: 0, name: 'Todas' }, ...data]
            setCategories(newCategory)
        }

        async function loadProducts() {
            const { data } = await api.get('/products')

            setProducts(data)
        }
        loadCategories()
        loadProducts()

    }, [])

    useEffect(() => {
        if (activeCategory === 0) {
            setFilteredProducts(products)
        } else {
            const newFilteredproducts = products.filter(
                (product) => product.category_id === activeCategory
            )
            setFilteredProducts(newFilteredproducts)
        }
    }, [products, activeCategory])

    return (
        <Container>
            <Banner>
                <h2>O MELHOR HAMBURGUER ESTÁ AQUI</h2>
                <p>Esse cardápio está irresistível!</p>
            </Banner>
            <CategoryMenu>
                {categories.map((category) => (
                    <CategoryButton
                        key={category.id}
                        $isActive={category.id === activeCategory}
                        onClick={() => {
                            navigate(
                                {
                                    pathname: '/cardapio',
                                    search: `?categoria=${category.id}`
                                },
                                {
                                    replace: true
                                },
                            )
                            setActiveCategory(category.id)
                        }}
                    >{category.name}</CategoryButton>
                ))}
            </CategoryMenu>
            <ContainerMenu>
                {filteredProducts.map((product) => (
                    <CardFilterProducts key={product.id} product={product} />
                ))}
            </ContainerMenu>
        </Container>

    )
}