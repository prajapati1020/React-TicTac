
function ProductRow({productrw}){
    const name =productrw.stocked ? productrw.name :
    <span style={{color:'red'}}>
      {productrw.name}
    </span>
    return(
      <>
      <tr>
        <td>
          {name}
        </td>
        <td>
          {productrw.price}
        </td>
      </tr>
      </>
    )
  }

  export default ProductRow