import Product from "../Product/Product"
import "./ProductsList.css"
import ResultPesquisa from '../ResultPesquisa/ResultPesquisa';


function ProductsList({products, handleClick,showPesquisa, search, mensagemShowPesquisa}){

    return(
        <div className="containerProductList">
            
             {showPesquisa && <ResultPesquisa search={search} mensagemShowPesquisa={mensagemShowPesquisa}/>}
           
            <ul className="productList">
                {products?.map((product) => (
                    <li key={product.id}><Product product={product} handleClick={handleClick}/></li>
                ))}
            </ul>
        </div>
    )

}

export default ProductsList