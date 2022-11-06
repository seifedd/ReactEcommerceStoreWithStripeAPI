import axios, * as others from "axios";

const getProducts = async () => {
  const Token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3Q6ODAwMCIsImV4cCI6IjE4MDAzNDc2OTgiLCJub19teXN0b3JlX2hvc3RzIjpbInNvbWVkb21haW4iLCJzaG9wbmFtZSJdLCJpYXQiOiIxNDg0ODE0ODk4Iiwic2NvcGVzIjpbIioiXX0.Si8mthda_pj-wO8o9RnLchxYJDl0O0vbaoKdiCXrN4xW9e0T04e4cSGgSGayJyjt1MC2IqT7tiKty1W6UiR8V-zXW0_Sm46FqvdtCFQQr4frJMtAm8y5_p17CN605oI4GFiL3VqH_jNmC-FZxlGHDQ1YYqo2IlNf9MOR1iSsxuZ7aI-NcVbRK2iDhPe8VcDlK4Eo1yrYO1hlKfPZ56ZPG18kaRwrCre8HoCHAu4SUL2alj6hbYvqms5LB7-dnvDAHUTDp4Uwuz_kqnsP-5xzed3uFVx-XXOBmJ-2EbnxMu-tuKWKkSDLomz421bDH1xYtU6z6GT95DAxwoWKTOUuwC3PsXksz9ekwgYy9PEpq59sl79V4i0Q5W6yDW4oJe-OYE3YaqFYdKeJbKmU4yQM0n2MyTqiR8czAhvarS3HYVp85z8vcM1InKdRj_D87nCTb3SW7vteH8cs8HZER1yLNA0S6Ds_qKpkTnekZdJmDnP99I-4evrF_fBszIz0MRjEjDBmjM6SHUyfLO48YjML2KsD4LEFO7KTzdHUXRTjz68VG0t3GGp162qUPWF1wNvD81iaeuUMYVbGGpGllRqbSFl4EgTbx3GmHyd5qOjUIQboo_DPMd8Geza4QzSYinxx94-yYrz3vnhgrnWcO722QzNKBjjVPWlsqsufe1mdYcY";

  const products = await axios
    .get(
      `https://private-amnesiac-ac0500-mystoreapi.apiary-proxy.com/shops/shopname/products`,
      {
        headers: {
          "Content-Type": "application/vnd.api+json",
          Accept: "application/vnd.api+json",
          Authorization: "Bearer " + Token,
        },
      }
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return products;
};

const productsArray = getProducts();

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData == undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productData;
}
