import "./Modal.css"


function Modal({setShowModal}){

    return(
        <div className="containerModal">
            <div className="modalBox">
                <h2>Este produto já está no seu carrinho</h2>
                <button onClick={() => setShowModal(false)} className="closeButton">X</button>
            </div>
        </div>
    )
}

export default Modal