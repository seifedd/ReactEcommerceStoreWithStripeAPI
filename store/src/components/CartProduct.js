import Button from "react-bootstrap/Button";
import { CartContext } from "../CartContext";
import { useContext } from "react";
// import { getProductData } from "../productsStore";
import useFetchProductData from "../use-fetch-product-data";
function CartProduct(props) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const [productData, loading] = useFetchProductData(id);
  // const productData = cart.getProductData();
  console.log(
    "#####################################################################"
  );
  console.log(id);
  console.log(productData);
  return (
    <>
      {loading && <div>Loading</div>}
      {!loading && (
        <>
          <h3>{productData.data.attributes.name.no}</h3>
          {quantity && <p>{quantity} total</p>}
          {quantity && productData && (
            <p>${(quantity * productData.data.attributes.price).toFixed(2)}</p>
          )}
          <Button size="sm" onClick={() => cart.deleteFromCart(id)}>
            Remove
          </Button>
          <hr></hr>
        </>
      )}
    </>
  );
}

export default CartProduct;
