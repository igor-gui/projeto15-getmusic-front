export default  function Product({product}) {

    return (
        <div>
            <h1><span>{product.name}</span></h1>
            <h1><span>{product.image}</span></h1>
            <h1>{product.description}</h1>
            <h1>Por:<span><b>R$</b>{product.price}</span></h1>
            <h1>disponível:<span>{product.amount}</span></h1>
        </div>
    )
}