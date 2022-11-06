import { createContext, useEffect, useState } from "react";
import axios, * as others from "axios";
export const CartContext = createContext({
  items: [],
  products: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  // getTotalCost: () => {},
});
function timeout(delay) {
  return new Promise((res) => setTimeout(res, delay));
}

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const [allProducts, setAllProducts] = useState();

  // const getProducts = async () => {
  //   const Token =
  //     "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3Q6ODAwMCIsImV4cCI6IjE4MDAzNDc2OTgiLCJub19teXN0b3JlX2hvc3RzIjpbInNvbWVkb21haW4iLCJzaG9wbmFtZSJdLCJpYXQiOiIxNDg0ODE0ODk4Iiwic2NvcGVzIjpbIioiXX0.Si8mthda_pj-wO8o9RnLchxYJDl0O0vbaoKdiCXrN4xW9e0T04e4cSGgSGayJyjt1MC2IqT7tiKty1W6UiR8V-zXW0_Sm46FqvdtCFQQr4frJMtAm8y5_p17CN605oI4GFiL3VqH_jNmC-FZxlGHDQ1YYqo2IlNf9MOR1iSsxuZ7aI-NcVbRK2iDhPe8VcDlK4Eo1yrYO1hlKfPZ56ZPG18kaRwrCre8HoCHAu4SUL2alj6hbYvqms5LB7-dnvDAHUTDp4Uwuz_kqnsP-5xzed3uFVx-XXOBmJ-2EbnxMu-tuKWKkSDLomz421bDH1xYtU6z6GT95DAxwoWKTOUuwC3PsXksz9ekwgYy9PEpq59sl79V4i0Q5W6yDW4oJe-OYE3YaqFYdKeJbKmU4yQM0n2MyTqiR8czAhvarS3HYVp85z8vcM1InKdRj_D87nCTb3SW7vteH8cs8HZER1yLNA0S6Ds_qKpkTnekZdJmDnP99I-4evrF_fBszIz0MRjEjDBmjM6SHUyfLO48YjML2KsD4LEFO7KTzdHUXRTjz68VG0t3GGp162qUPWF1wNvD81iaeuUMYVbGGpGllRqbSFl4EgTbx3GmHyd5qOjUIQboo_DPMd8Geza4QzSYinxx94-yYrz3vnhgrnWcO722QzNKBjjVPWlsqsufe1mdYcY";

  //   await axios
  //     .get(`https://api.mystore.no/shops/shopname/products`, {
  //       headers: {
  //         Accept: "application/vnd.api+json",
  //         Authorization: "Bearer " + Token,
  //       },
  //     })
  //     .then((response) => {
  //       return response.data;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // useEffect( async()=>{
  //   getProducts()
  //   await timeout ( 4000);
  //   console.log("###CartContext");
  //   console.log(allProducts);
  // },[])

  // const getProductData = async (id) => {
  //   const productsArray = await getProducts();
  //   let productData = productsArray.find((product) => product.id === id);

  //   if (productData == undefined) {
  //     console.log("Product data does not exist for ID: " + id);
  //     return undefined;
  //   }

  //   return productData;
  // };

  function getProductQuantity(id) {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      // product is not in cart
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      // product is in cart
      // [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]    add to product id of 2
      setCartProducts(
        cartProducts.map(
          (product) =>
            product.id === id // if condition
              ? { ...product, quantity: product.quantity + 1 } // if statement is true
              : product // if statement is false
        )
      );
    }
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity == 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map(
          (product) =>
            product.id === id // if condition
              ? { ...product, quantity: product.quantity - 1 } // if statement is true
              : product // if statement is false
        )
      );
    }
  }

  function deleteFromCart(id) {
    // [] if an object meets a condition, add the object to array
    // [product1, product2, product3]
    // [product1, product3]
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id != id;
      })
    );
  }

  // function getTotalCost() {
  //   let totalCost = 0;
  //   cartProducts.map((cartItem) => {
  //     const productData = getProductData(cartItem.id);
  //     totalCost += productData.price * cartItem.quantity;
  //   });
  //   return totalCost;
  // }

  const contextValue = {
    items: cartProducts,
    products: allProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    // getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;

// CODE DOWN HERE

// Context (cart, addToCart, removeCart)
// Provider -> gives your React app access to all the things in your context
