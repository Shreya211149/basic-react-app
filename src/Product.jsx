import Price from "./Price"; 
import "./Product.css"; 

function Product({title,idx}){
    let oldPrices=["12495","11900","1599","599"];
    let newPrices=["8999","9199","898","276"];
    let description = [["8,000 DPI", "5 Programmable buttons"],["intuitive surface", "designed for ipad Pro"], ["designed for iPad Pro", "intuitive surface"], ["wireless", "optical orientation"],
           ];
 return(
   <div className="Product">
    <h4>{title}</h4>
    <p>{description[idx][0]}</p>
    <p>{description[idx][1]}</p>

    <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
   </div>
 );
}

export default Product;