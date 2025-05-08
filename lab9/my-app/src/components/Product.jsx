export default function Product({id, name, price, inStock, buttonToggle}){
    const productStyle = {
        marginBottom: "10px",
        fontSize: "18px",
        color: "white",
        display: "flex",
        alignItems: "center"
    };

    const buttonStyle = {
        marginLeft: "15px",
        padding: "5px 10px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
    };
    return(
        <div>
             <p style={productStyle}><span>{id} - ${price}</span>  
                        <button onClick={()=>buttonToggle(id)} style={buttonStyle}>Modify</button> 
                        <span style={{color : inStock?"green":"red"}}>{inStock?"inStock":"OutOfStock"}</span>
                </p>
        </div>
    )
}