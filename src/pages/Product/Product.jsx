import "./product.css"
import Single from "../../Components/Single/Single"
import { singleProduct } from "../../data"
const Product = () => {
  return (
    <div className='single_product'>
        <Single {...singleProduct}/>
    </div>
  )
}

export default Product