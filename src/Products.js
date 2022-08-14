function Products ({ flowers }) {
    // console.log(flowers)
    return (
        <div className="productBox">
            {flowers.map ((element => {
                const {id, name, price, searchTerm, image} = element;
                return (
                    <div key={id} className="productCard">
                        <img src={image} alt={name} width="290px" height="450px" className="productImg"/>
                        <h2>{name}</h2>
                        <p>${price}</p>
                    </div>
                )
            }))}
        </div>
    )
}

export default Products;