import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";

function ProductTable({productable}){
  
    const rows=[];
    let lastCategory =null;
 
    productable.forEach((productky)=>{//product as key
       if(productky.category!== lastCategory){
         rows.push(
           <ProductCategoryRow category={productky.category}
                               key={productky.category}//to track the array
           />
         )
       }
       rows.push(
         <ProductRow productrw={productky} key={productky.name}/>
       )
       lastCategory =productky.category
    })
 
   return(
     <>
     <table>
       <thead>
       <tr>
         <th>Name</th>
         <th>Price</th>
       </tr>
       </thead>
       <tbody>{rows}</tbody>
     </table>
     </>
   )
 }

 export default ProductTable