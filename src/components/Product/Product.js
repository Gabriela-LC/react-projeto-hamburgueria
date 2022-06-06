import "./Product.css"

function Product({product, handleClick}){

    return(
        <div className="productCard">
            <figure>
              <img src={product.img} alt={product.name}/>
            </figure>
            <div className="productInfo">
                <h3>{product.name}</h3>
                <p>{product.category}</p>
                <span>R$ {product.price.toFixed(2).replace(".",",")}</span>
                <button onClick={() => handleClick(product.id)}>Adicionar</button>
            </div>
        </div>
    )
}

export default Product