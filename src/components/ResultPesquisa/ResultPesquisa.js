import "./ResultPesquisa.css"

function ResultPesquisa({search,mensagemShowPesquisa}){

    return(
        <div className="resultPesquisa">
            {mensagemShowPesquisa?(
            <h2>Resultados para: <span>{search}</span></h2>
            ):(
            <h2>Sem resultados para: <span>{search}</span></h2>
            )}
        </div>
    )
}

export default ResultPesquisa