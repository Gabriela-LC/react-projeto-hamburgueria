import "./CartTotal.css"
function CartTotal({cartTotal, setCartTotal,currentSale, setCurrentSale}){


    function removeAll(){
        setCurrentSale([])
    }
    
    return(
        <div className="cartTotal">
            <div className="cartTotalInfo">
                <p>Total</p>
                <span>R$ {currentSale.reduce((acc, product) => {
                    return acc + product.price
                },0).toFixed(2).replace(".",",")}
                </span>
            </div>
            <button onClick={removeAll}>Remover todos</button>
        </div>
    )

}

export default CartTotal