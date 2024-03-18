import ProductTable from "./ProductTable";

function FilterableProductTable({products}){
    console.log(products);
    return(
      <>
      <div>
        <ProductTable productable={products}/>
      </div>
      </>
    )
  }
  export default FilterableProductTable
  