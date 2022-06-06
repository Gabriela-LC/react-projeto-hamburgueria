import './App.css';
import {useEffect, useState} from "react"
import ProductsList from './components/ProductsList/ProductsList';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';

function App() {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])
  const [cartTotal, setCartTotal] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [search, setSearch] = useState("")
  const [showPesquisa, setShowPesquisa] = useState(false)
  const [mensagemShowPesquisa, setMensagemShowPesquisa] = useState(true)


  useEffect( () => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
    .then((res) => res.json())
    .then((res) => setProducts(res))
  }, [])

  function showProducts(search){

    const FilterOnProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(search.toLowerCase())
    })

    console.log(FilterOnProducts);

    if(FilterOnProducts.length === 0){
      setMensagemShowPesquisa(false)
    } else{
    setMensagemShowPesquisa(true)
    setFilteredProducts(FilterOnProducts)
    }
    setShowPesquisa(true)

  }

  function handleClick(id){

    if(currentSale.find((product) =>{
      return product.id === id
    })){
      setShowModal(true)
    } else{
      const productAdded = products.find((product) =>{
        return product.id === id
      })
      setCurrentSale([...currentSale, productAdded])
      console.log(currentSale);
    }
  }

  return (
    <div className="App">
      {showModal && <Modal setShowModal={setShowModal}/>}
      <Header showProducts={showProducts} search={search} setSearch={setSearch} setShowPesquisa={setShowPesquisa} setFilteredProducts={setFilteredProducts}/>
      <main>
        <ProductsList products={filteredProducts.length > 0? filteredProducts : products} handleClick={handleClick} showPesquisa={showPesquisa} search={search} mensagemShowPesquisa={mensagemShowPesquisa}/>
        <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} cartTotal={cartTotal} setCartTotal={setCartTotal}/>
      </main>
    </div>
  );
}

export default App;
