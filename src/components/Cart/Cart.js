import CartProdutc from "../CartProduct/CartProduct"
import CartTotal from "../CartTotal/CartTotal"
import "./Cart.css"

function Cart({currentSale, setCurrentSale, cartTotal, setCartTotal}){
    return(
        <section className="containerCarrinho">
            <h2>Carrinho de Compras</h2>
            <div className="carrinho">
            {currentSale.length >0? (
                <div className="sacolaCheia">
                    <ul>
                        {currentSale.map((product) => (
                            <li key={product.id}><CartProdutc product={product} setCurrentSale={setCurrentSale} currentSale={currentSale}/></li>
                        ))}
                    </ul>
                    <div className="divisor"></div>
                    <CartTotal cartTotal={cartTotal} setCartTotal={setCartTotal} currentSale={currentSale} setCurrentSale={setCurrentSale}/>
                </div>
            ):(
                <div className="sacolaVazia">
                    <h3>Sua sacola está vazia</h3>
                    <p>Adicione itens</p>
                </div>
            )}
            </div>
        </section>
    )

}

export default Cart