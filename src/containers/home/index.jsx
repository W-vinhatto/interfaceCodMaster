



import { CategoriesCarrosel } from '../../components/CategoriesCarossel'
import { Container, Banner, Content } from './style'
import {OffersCarrosel} from '../../components/OffersCarossel'

export function Home() {
    return (
        <main>
            <Banner>
                <h1>Seja bem vindo!</h1>
            </Banner>
            <Container>
                <Content>
                    <CategoriesCarrosel />
                    <OffersCarrosel />
                </Content>
            </Container>
        </main>

    )
}