import "./Header.css"

function Header({showProducts, search, setSearch,setShowPesquisa,setFilteredProducts}){

    function onChangeInput(event){
        setShowPesquisa(false)
        setFilteredProducts([])
        setSearch(event.target.value)
    }

    function showAll(){
        setFilteredProducts([])
        setShowPesquisa(false)
    }

    return(
        <header>
            <h1>Burger <span>Kenzie</span></h1>
                <button  className="btnMostrarTodos" onClick={showAll}>Mostrar todos os produtos</button>
                <section className="sectionSearch">
                    <input placeholder="Digitar pesquisa" onChange={(event)=> onChangeInput(event)} type="text"/>
                    <button onClick={() => showProducts(search)}> Pesquisar</button>
                </section>
        </header>
    )
}

export default Header