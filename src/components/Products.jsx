import Product from "./Product"
import guitar from '../assets/images/guitar.jpg'


export default function Products() {
    const product = {
        name: 'Guitarra bacana',
        price: 'R$ 2500,00',
        category: 'Eletrônico',
        description: 'muito massa, som top',
        image: guitar,
        amount: 9
    }



    return (
        <section className="items">
            <Product product={product}/>
            <Product product={product}/>
            <Product product={product}/>
            <Product product={product}/>
        </section>
    )
}