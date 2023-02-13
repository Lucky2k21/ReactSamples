import React from "react";


import './product.css';

const ProdDisplay=(props)=>{
    console.log(props)

    const renderProduct=props.prodData.map((item,i)=>{
        return(




                  <div key={i} className="card border-0 col-md-4 col-lg-3 col-sm-4 col-6 mb-3">
                  <img src={item.Image} alt={item.product_name}/>
                     <div className="card-body text-center ">
                        <h4 className="card-title " >{item.product_name}</h4>
                        <p className="card-text mt-3" ><del>₹249.00</del> <span>{item.Price}</span></p>

                        <button className="btn btn-dark">Add to cart</button>
                     </div>
                  </div>



               /*<div className="card">
                <img src={item.Image} alt={item.product_name}/>
                <div>
                    <h3>{item.product_name}</h3>
                    <p>{item.Price}</p>

                </div>
            </div>*/
        )



    })


    return(
        <section  id="product" className="py-5" style={{backgroundColor:'var(--primary-color)'}}>
            <div className="container-fluid">
               <div className="title text-center py-5">
                  <h1 className="position-relative d-inline-block" style={{color:'var(--secondary-color)'}}>Products</h1>
               </div>
               <div className="row " >

            {renderProduct}

            </div>
            </div>

                  </section>
    )
}

export default ProdDisplay;