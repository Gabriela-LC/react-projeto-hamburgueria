import "./CartProduct.css"

function CartProdutc({product,currentSale, setCurrentSale}){

    function removeFromCart(id){

        const newCart = currentSale.filter((product) => {
            return product.id !== id
        })

        console.log(newCart);
        setCurrentSale(newCart)
    }

    return(
        <div className="cartProduct">
            <figure>
             <img src={product.img} alt={product.name}/>
            </figure>
            <div className="cartProductInfo">
                <h4>{product.name}</h4>
                <p>{product.category}</p>
                <button onClick={() => removeFromCart(product.id)}>Remover</button>
            </div>
        </div>
    )
}

export default CartProdutc