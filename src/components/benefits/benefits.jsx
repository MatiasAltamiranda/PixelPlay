import "./benefits.css"

function Benefits(){
    return(
        <>
            <section className="container benefits">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="benefits_card">
                           <main className="text-center">
                           <i className="bi bi-plus-circle-dotted benefits_card_text"></i>
                                <h2 className="benefits_card_text">Amplia selección de juegos digitales de todas las categorías</h2>
                           </main>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="benefits_card card_center">
                           <main className="text-center">
                           <i className="bi bi-currency-dollar benefits_card_text"></i>
                                <h2 className="benefits_card_text ">Precios y descuentos exclusivos en juegos digitales populares.</h2>
                           </main>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="benefits_card">
                           <main className="text-center">
                           <i className="bi bi-cloud-arrow-down-fill benefits_card_text"></i>
                                <h2 className="benefits_card_text">Sin costos de envío ni espera en la entrega, todo es en línea.</h2>
                           </main>
                        </div>
                    </div>
                </div>
            </section>
         </>
    )
}

export default Benefits;